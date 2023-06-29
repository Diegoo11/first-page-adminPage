import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import Home from './Home/Home';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('admin-login-token')) {
      setToken(localStorage.getItem('admin-login-token'));
    }
  }, []);
  return (
    <div>
      {!token && <LoginForm setToken={setToken} />}
      {token && <Home />}
    </div>
  );
}

export default App;
