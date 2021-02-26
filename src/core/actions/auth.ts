import { Action } from '../interfaces/action';
import { IRegisterForm } from '../interfaces/register-form';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  REGISTER = '[Auth] REGISTER',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_FAILED = '[Auth] REGISTER_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export const login = (
  login: string,
  password: string
): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN, payload: { login, password } };
};

export const loginSuccess = (uid: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN_SUCCESS, payload: { uid } };
};

export const loginFailed = (error: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN_FAILED, payload: { error } };
};

export const register = (data: IRegisterForm): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.REGISTER, payload: { data } };
};

export const registerSuccess = (uid: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.REGISTER_SUCCESS, payload: { uid } };
};

export const registerFailed = (error: string): Action<AuthActionTypes> => {
  return {
    type: AuthActionTypes.REGISTER_FAILED,
    payload: { error },
  };
};

export const logout = (): Action<AuthActionTypes> => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
