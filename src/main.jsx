import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, InMemoryCache, HttpLink, ApolloProvider,
} from '@apollo/client';
import App from './App';
import { AdminProvider } from './context/AdminContext';

const getAuth = () => {
  const tk = localStorage.getItem('admin-login-token');
  return tk ? `admin ${tk}` : null;
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      authorization: getAuth(),
    },
    uri: 'https://first-page-backend-production.up.railway.app/',
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <AdminProvider>
      <App />
    </AdminProvider>
  </ApolloProvider>,
);
