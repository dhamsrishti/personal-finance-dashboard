import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [userToken, setUserToken] = useState(null);

  return (
    <div>
      {userToken ? (
        <Dashboard userToken={userToken} />
      ) : (
        <Login setUserToken={setUserToken} />
      )}
    </div>
  );
};

export default App;
