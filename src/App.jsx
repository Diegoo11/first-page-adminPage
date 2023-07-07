import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import LoginForm from './LoginForm';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import ScreenError from './ScreenError/ScreenError';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('admin-login-token')) {
      setToken(localStorage.getItem('admin-login-token'));
    }
  }, []);

  const { loading, data, error } = useQuery(gql`
  query{
    testConnection
  }
`);
  // eslint-disable-next-line no-console
  console.log(data ? data.testConnection : 'Loading');
  if (error) return <ScreenError errorCode={error.code} msgError={error.message} />;
  if (loading) return <Loading />;

  return (
    <div>
      {!token && <LoginForm setToken={setToken} />}
      {token && <Home />}
    </div>
  );
}

export default App;
