import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { graphQLClient } from './util/graphqlUtil';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphQLClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
