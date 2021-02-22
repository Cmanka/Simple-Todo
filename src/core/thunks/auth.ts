import { Dispatch } from 'redux';
import {
  loginFailed,
  login,
  loginSuccess,
  logout,
  register,
  registerSuccess,
  registerFailed,
} from '../actions/auth';
import * as AuthService from '../services/auth';
import { IRegisterForm } from '../interfaces/register-form';
import { getUserThunk } from './user';
import { userClearData } from '../actions/user';

export const loginThunk = (email: string, password: string) => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(login());
    AuthService.login(email, password).then(
      (uid) => {
        dispatch(loginSuccess(uid));
        dispatch(getUserThunk());
      },
      (error) => {
        dispatch(loginFailed(error.message));
      }
    );
  };
};

export const logoutThunk = () => {
  return (dispatch: Dispatch): void => {
    AuthService.logout().then(() => {
      dispatch(logout());
      dispatch(userClearData());
    });
  };
};

export const registerThunk = ({
  email,
  password,
  firstName,
  lastName,
}: IRegisterForm) => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(register());
    AuthService.register({
      email,
      password,
      firstName,
      lastName,
    }).then(
      (user) => {
        dispatch(registerSuccess(user.uid));
        dispatch(getUserThunk());
      },
      (error) => {
        dispatch(registerFailed(error.message));
      }
    );
  };
};
