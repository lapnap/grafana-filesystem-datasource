import {DataSourcePlugin} from '@grafana/ui';

import {FSDataSource} from './FSDataSource';
import {FSQueryEditor} from './FSQueryEditor';
import {FSConfigEditor} from './FSConfigEditor';
import {FSOptions, FSQuery} from './types';

export const plugin = new DataSourcePlugin<FSDataSource, FSQuery, FSOptions>(FSDataSource)
  .setConfigEditor(FSConfigEditor)
  .setQueryEditor(FSQueryEditor);
