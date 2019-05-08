import {DataQuery, DataSourceJsonData} from '@grafana/ui';

export interface FSQuery extends DataQuery {
  path?: string;
}

export interface FSOptions extends DataSourceJsonData {
  //
}
