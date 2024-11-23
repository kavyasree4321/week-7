import React, { useState } from 'react';

const task8 = () => {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the login/logout state
  const toggleLoginLogout = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <button onClick={toggleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default task8;