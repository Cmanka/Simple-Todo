import React, { FC } from 'react';
import Header from './core/components/Header/Header';
import TodoPage from './pages/Todo/TodoPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/Details/DetailsPage';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './core/reducers';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';

const App: FC = () => {
  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <PrivateRoute component={TodoPage} path="/todoList" exact />
          <PrivateRoute component={DetailsPage} path="/todo/:id" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={RegisterPage} path="/register" exact />
          <PrivateRoute component={ProfilePage} path="/profile" exact />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  );
};

export default App;
