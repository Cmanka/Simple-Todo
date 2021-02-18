import { getUserThunk } from './user';
import { Dispatch } from 'redux';
import {
  loginFailed,
  loginLoading,
  loginSuccess,
  logoutAction,
  registerLoading,
  registerSuccess,
  registerFailed,
} from '../actions/auth';
import * as AuthService from '../services/auth';

export const loginThunk = (email: string, password: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loginLoading());
    AuthService.login(email, password).then(
      (data) => {
        dispatch(loginSuccess(data.user?.uid));
        dispatch(getUserThunk());
      },
      (error) => {
        dispatch(loginFailed(error.message));
      }
    );
  };
};

export const logoutThunk = () => {
  return (dispatch: Dispatch<any>) => {
    AuthService.logout().then(() => {
      dispatch(logoutAction());
      dispatch(getUserThunk());
    });
  };
};

export const registerThunk = ({
  email,
  password,
  firstName,
  lastName,
}: any) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(registerLoading());
    AuthService.register({
      email,
      password,
      firstName,
      lastName,
    }).then(
      (user) => {
        dispatch(registerSuccess(user?.uid));
        dispatch(getUserThunk());
      },
      (error) => {
        dispatch(registerFailed(error.message));
      }
    );
  };
};
