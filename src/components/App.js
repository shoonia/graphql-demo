import React, { Component } from 'react';
import { Query  } from 'react-apollo';

import Table from './Table';
import { FETCH_RATES } from '../query/table';

class App extends Component {
  state = {
    currency: 'UAH',
  };

  handlerOnClick = event => {
    const { currency } = event.target.dataset;
  
    if (currency !== undefined) {
      this.setState({ currency });
    }
  };

  renderTable = ({ loading, error, data }) => {
    const { currency } = this.state;
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error :(</p>;
    }
  
    return (
      <Table
        rates={data.rates}
        active={currency}
        rowOnClick={this.handlerOnClick}
      />
    );
  };

  render() {
    const { currency } = this.state;
    const variables = { currency };

    return (
      <Query variables={variables} query={FETCH_RATES}>
        {this.renderTable}
      </Query>
    );
  }
}

export default App;
