import React from 'react';
import Header from './core/components/Header/Header';
import TodoPage from './pages/Todo/TodoPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/Details/DetailsPage';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './core/reducers';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';

const App: React.FC = () => {
  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={TodoPage} path="/todoList" />
          <Route component={DetailsPage} path="/todo/:id" />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  );
};

export default App;
