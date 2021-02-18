export enum AuthActionTypes {
  LOGIN_LOADING = '[Auth] LOGIN_LOADING',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  REGISTER_LOADING = '[Auth] REGISTER_LOADING',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_FAILED = '[Auth] REGISTER_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export const loginLoading = () => {
  return { type: AuthActionTypes.LOGIN_LOADING };
};

export const loginSuccess = (uid?: string) => {
  return { type: AuthActionTypes.LOGIN_SUCCESS, payload: { uid } };
};

export const loginFailed = (error: string) => {
  return { type: AuthActionTypes.LOGIN_FAILED, payload: { error } };
};

export const registerLoading = () => {
  return { type: AuthActionTypes.REGISTER_LOADING };
};

export const registerSuccess = (uid?: string) => {
  return { type: AuthActionTypes.REGISTER_SUCCESS, payload: { uid } };
};

export const registerFailed = (error: string) => {
  return {
    type: AuthActionTypes.REGISTER_FAILED,
    payload: { error },
  };
};

export const logoutAction = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
