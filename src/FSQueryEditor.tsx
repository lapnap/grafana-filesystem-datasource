// Libraries
import React, {PureComponent} from 'react';

// Types
import {FSDataSource} from './FSDataSource';
import {FSQuery, FSOptions} from './types';

import {FormLabel, QueryEditorProps} from '@grafana/ui';

type Props = QueryEditorProps<FSDataSource, FSQuery, FSOptions>;

interface State {}

export class FSQueryEditor extends PureComponent<Props, State> {
  state = {
    text: '',
  };

  onComponentDidMount() {}

  render() {
    const {query} = this.props;

    return (
      <div>
        <div className="gf-form">
          <FormLabel width={4}>Path</FormLabel>
          {query.path}
        </div>
      </div>
    );
  }
}
