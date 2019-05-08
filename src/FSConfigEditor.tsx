// Libraries
import React, {PureComponent} from 'react';

// Types
import {FSOptions} from './types';

import {DataSourcePluginOptionsEditorProps, DataSourceSettings} from '@grafana/ui';

type FSSettings = DataSourceSettings<FSOptions>;

interface Props extends DataSourcePluginOptionsEditorProps<FSSettings> {}

interface State {}

export class FSConfigEditor extends PureComponent<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return <div>TODO... field editor...</div>;
  }
}
