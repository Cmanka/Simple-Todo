import React, { FC, useEffect } from 'react';
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
import NotFound from './pages/NotFound/NotFound';
import ProfileForm from './pages/Profile/components/ProfileForm/ProfileForm';
import { auth } from './core/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './core/actions/auth';
import { selectAuthData } from './core/selectors/auth';

const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthData);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(loginSuccess(user?.uid));
    });
  }, []);

  if (!user) {
    return <div></div>;
  }

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
          <PrivateRoute component={ProfileForm} path="/profile_edit" exact />
          <Route component={NotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  );
};

export default App;
