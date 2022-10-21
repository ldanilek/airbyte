#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


from datetime import datetime
from typing import (
    Any,
    Dict,
    Iterable,
    Iterator,
    List,
    Mapping,
    MutableMapping,
    Optional,
    Tuple,
    TypedDict,
)

import requests
from airbyte_cdk.sources import AbstractSource
from airbyte_cdk.sources.streams import IncrementalMixin, Stream
from airbyte_cdk.sources.streams.http import HttpStream
from airbyte_cdk.sources.streams.http.requests_native_auth.token import (
    TokenAuthenticator,
)


ConvexConfig = TypedDict('ConvexConfig', {
    'instance_name': str,
    'access_key': str,
})

ConvexState = TypedDict('ConvexState', {
    'snapshot_cursor': Optional[str],
    'snapshot_has_more': bool,
    'delta_cursor': Optional[int],
})


def convex_url_base(instance_name: str) -> str:
    if "localhost" in instance_name:
        return instance_name
    return f"https://{instance_name}.convex.cloud"


# Source
class SourceConvex(AbstractSource):
    def _json_schemas(self, config: ConvexConfig) -> requests.Response:
        instance_name = config["instance_name"]
        access_key = config["access_key"]
        url = f"{convex_url_base(instance_name)}/api/json_schemas?deltaSchema=true"
        headers = {"Authorization": f"Convex {access_key}"}
        return requests.get(url, headers=headers)

    def check_connection(self, logger: Any, config: ConvexConfig) -> Tuple[bool, Any]:
        """
        Connection check to validate that the user-provided config can be used to connect to the underlying API

        :param config:  the user-input config object conforming to the connector's spec.yaml
        :param logger:  logger object
        :return Tuple[bool, any]: (True, None) if the input config can be used to connect to the API successfully, (False, error) otherwise.
        """
        resp = self._json_schemas(config)
        if resp.status_code == 200:
            return True, None
        else:
            return False, resp.text

    def streams(self, config: ConvexConfig) -> List[Stream]:
        """
        :param config: A Mapping of the user input configuration as defined in the connector spec.
        """
        resp = self._json_schemas(config)
        assert resp.status_code == 200
        json_schemas = resp.json()
        table_names = list(json_schemas.keys())
        return [
            ConvexStream(
                config["instance_name"],
                config["access_key"],
                table_name,
                json_schemas[table_name],
            )
            for table_name in table_names
        ]


class ConvexStream(HttpStream, IncrementalMixin):
    def __init__(self, instance_name: str, access_key: str, table_name: str, json_schema: Mapping[str, Any]):
        self.instance_name = instance_name
        self.table_name = table_name
        if json_schema:
            json_schema["properties"]["_ab_cdc_lsn"] = {"type": "number"}
            json_schema["properties"]["_ab_cdc_updated_at"] = {"type": "string"}
            json_schema["properties"]["_ab_cdc_deleted_at"] = {"anyOf": [{"type": "string"}, {"type": "null"}]}
        else:
            json_schema = {}
        self.json_schema = json_schema
        self._snapshot_cursor_value: Optional[str] = None
        self._snapshot_has_more = True
        self._delta_cursor_value: Optional[int] = None
        self._delta_has_more = True
        super().__init__(TokenAuthenticator(access_key, "Convex"))

    @property
    def name(self) -> str:
        return self.table_name

    @property
    def url_base(self) -> str:
        return convex_url_base(self.instance_name)

    def get_json_schema(self) -> Mapping[str, Any]:
        return self.json_schema

    primary_key = "_id"
    cursor_field = "_ts"

    # Checkpoint stream reads after this many records. This prevents re-reading of data if the stream fails for any reason.
    state_checkpoint_interval = 128

    @property
    def state(self) -> ConvexState:
        return {
            "snapshot_cursor": self._snapshot_cursor_value,
            "snapshot_has_more": self._snapshot_has_more,
            "delta_cursor": self._delta_cursor_value,
        }

    @state.setter
    def state(self, value: ConvexState) -> None:
        self._snapshot_cursor_value = value["snapshot_cursor"]
        self._snapshot_has_more = value["snapshot_has_more"]
        self._delta_cursor_value = value["delta_cursor"]

    def next_page_token(self, response: requests.Response) -> Optional[ConvexState]:
        # Inner level of pagination shares the same state as outer,
        # and returns None to indicate that we're done.
        return self.state if self._delta_has_more else None

    def path(
        self,
        stream_state: Optional[ConvexState] = None,
        stream_slice: Optional[Mapping[str, Any]] = None,
        next_page_token: Optional[ConvexState] = None,
    ) -> str:
        if self._snapshot_has_more:
            return "/api/list_snapshot"
        else:
            return "/api/document_deltas"

    def parse_response(
        self,
        response: requests.Response,
        stream_state: ConvexState,
        stream_slice: Optional[Mapping[str, Any]] = None,
        next_page_token: Optional[ConvexState] = None,
    ) -> Iterable[Any]:
        resp_json = response.json()
        if self._snapshot_has_more:
            self._snapshot_cursor_value = resp_json["cursor"]
            self._snapshot_has_more = resp_json["hasMore"]
            self._delta_cursor_value = resp_json["snapshot"]
        else:
            self._delta_cursor_value = resp_json["cursor"]
            self._delta_has_more = resp_json["hasMore"]
        return list(resp_json["values"])

    def request_params(
        self,
        stream_state: ConvexState,
        stream_slice: Optional[Mapping[str, Any]] = None,
        next_page_token: Optional[ConvexState] = None,
    ) -> MutableMapping[str, Any]:
        params: Dict[str, Any] = {"tableName": self.table_name}
        if self._snapshot_has_more:
            if self._snapshot_cursor_value:
                params["cursor"] = self._snapshot_cursor_value
            if self._delta_cursor_value:
                params["snapshot"] = self._delta_cursor_value
        else:
            if self._delta_cursor_value:
                params["cursor"] = self._delta_cursor_value
        return params

    def get_updated_state(self, current_stream_state: ConvexState, latest_record: Mapping[str, Any]) -> ConvexState:
        """
        This (deprecated) method is still used by AbstractSource to update state between calls to `read_records`.
        """
        return self.state

    def read_records(self, *args: Any, **kwargs: Any) -> Iterator[Any]:
        for record in super().read_records(*args, **kwargs):
            ts_ns = record["_ts"]
            ts_seconds = ts_ns / 1e9  # convert from nanoseconds.
            # equivalent of java's `new Timestamp(transactionMillis).toInstant().toString()`
            ts_datetime = datetime.fromtimestamp(ts_seconds)
            ts = ts_datetime.isoformat()
            # DebeziumEventUtils.CDC_LSN
            record["_ab_cdc_lsn"] = ts_ns
            # DebeziumEventUtils.CDC_DELETED_AT
            record["_ab_cdc_updated_at"] = ts
            record["_deleted"] = "_deleted" in record and record["_deleted"]
            # DebeziumEventUtils.CDC_DELETED_AT
            record["_ab_cdc_deleted_at"] = ts if record["_deleted"] else None
            yield record
