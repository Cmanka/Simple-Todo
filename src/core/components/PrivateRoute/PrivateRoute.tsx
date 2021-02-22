import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { selectAuthUser } from '../../selectors/auth';

const PrivateRoute: FC<RouteProps> = ({ ...rest }) => {
  const auth = useSelector(selectAuthUser);

  return !auth ? <Redirect to="/login" /> : <Route {...rest} />;
};

export default PrivateRoute;
