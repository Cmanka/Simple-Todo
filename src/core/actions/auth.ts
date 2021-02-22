import { Action } from '../interfaces/action';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  REGISTER = '[Auth] REGISTER',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_FAILED = '[Auth] REGISTER_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export const login = (): ILogin => {
  return { type: AuthActionTypes.LOGIN };
};

export const loginSuccess = (uid: string): ILoginSuccess => {
  return { type: AuthActionTypes.LOGIN_SUCCESS, payload: { uid } };
};

export const loginFailed = (error: string): ILoginFailed => {
  return { type: AuthActionTypes.LOGIN_FAILED, payload: { error } };
};

export const register = (): IRegister => {
  return { type: AuthActionTypes.REGISTER };
};

export const registerSuccess = (uid: string): IRegisterSuccess => {
  return { type: AuthActionTypes.REGISTER_SUCCESS, payload: { uid } };
};

export const registerFailed = (error: string): IRegisterFailed => {
  return {
    type: AuthActionTypes.REGISTER_FAILED,
    payload: { error },
  };
};

export const logout = (): ILogout => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

interface ILogin extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGIN;
}

interface ILoginSuccess extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: { uid: string };
}

interface ILoginFailed extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGIN_FAILED;
  payload: { error: string };
}

interface IRegister extends Action<AuthActionTypes> {
  type: AuthActionTypes.REGISTER;
}

interface IRegisterSuccess extends Action<AuthActionTypes> {
  type: AuthActionTypes.REGISTER_SUCCESS;
  payload: { uid: string };
}

interface IRegisterFailed extends Action<AuthActionTypes> {
  type: AuthActionTypes.REGISTER_FAILED;
  payload: { error: string };
}

interface ILogout extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction =
  | ILogin
  | ILoginSuccess
  | ILoginFailed
  | IRegister
  | IRegisterSuccess
  | IRegisterFailed
  | ILogout;
