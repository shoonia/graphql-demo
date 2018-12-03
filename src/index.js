import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider  } from 'react-apollo';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
