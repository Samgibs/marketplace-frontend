import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return token ? <Component token={token} {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
