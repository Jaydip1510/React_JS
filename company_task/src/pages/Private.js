import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// PrivateRoute component for protecting routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
