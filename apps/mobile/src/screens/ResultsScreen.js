// @flow

import * as React from 'react';
import { Results } from '@kiwicom/margarita-core';

type Props = {|
  +navigation: {|
    +state: {|
      +params: {|
        +travelFrom: string,
        +travelTo: string,
        +dateFrom: string,
        +dateTo: string,
      |},
    |},
  |},
|};

export default class ResultsScreen extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <Results {...navigation.state.params} />
      </>
    );
  }
}