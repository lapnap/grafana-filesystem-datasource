// Types
import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
} from '@grafana/ui';

import {FSQuery, FSOptions} from './types';

export class FSDataSource implements DataSourceApi<FSQuery> {
  // Filled in by grafana plugin system
  name?: string;

  // Filled in by grafana plugin system
  id?: number;

  // Filled by constructor
  // settings?: DataSourceInstanceSettings<FSOptions>;

  constructor(instanceSettings: DataSourceInstanceSettings<FSOptions>) {
    // this.settings = instanceSettings;
  }

  // /**
  //  * Convert a query to a simple text string
  //  */
  // getQueryDisplayText(query: FSQuery): string|undefined {
  //   return `Get Data: ${query.path}`;
  // }

  query(options: DataQueryRequest<FSQuery>): Promise<DataQueryResponse> {
    // const {url, jsonData} = this.settings;

    // console.log( "FETCH", options, url, jsonData );

    return Promise.resolve({data: []});
  }

  testDatasource() {
    return new Promise((resolve, reject) => {
      resolve({
        status: 'success',
        message: 'Yes',
      });
    });
  }
}
