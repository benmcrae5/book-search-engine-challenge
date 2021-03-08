import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { ApolloClient, ApolloProvider} from '@apollo/client';
import Auth from './utils/auth'

const client = new ApolloClient({
  uri: '/graphql',
  request: (operation) => {
    const token = Auth.getToken()
    if (!token) return;
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
