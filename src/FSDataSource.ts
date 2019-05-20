// Types
import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
} from '@grafana/ui';

import {FSQuery, FSOptions} from './types';

export class FSDataSource extends DataSourceApi<FSQuery, FSOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<FSOptions>) {
    super(instanceSettings);
  }

  /**
   * Convert a query to a simple text string
   */
  getQueryDisplayText(query: FSQuery) {
    return `Get Data: ${query.path}`;
  }

  query(options: DataQueryRequest<FSQuery>): Promise<DataQueryResponse> {
    // if (!this.settings) {
    //   return Promise.reject('no settings');
    // }

    // const {url, jsonData} = this.settings;

    // console.log('FETCH', options, url, jsonData);

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
