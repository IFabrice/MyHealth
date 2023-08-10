import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const auth = null;


} = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;