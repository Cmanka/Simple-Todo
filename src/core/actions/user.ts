import { IUser } from './../interfaces/user';

export enum UserActionTypes {
  USER_LOADING = `[User] USER_LOADING`,
  USER_LOADING_SUCCESS = '[User] USER_LOADING_SUCCESS',
  USER_LOADING_FAILED = '[User] USER_LOADING_FAILED',
}

export const userLoading = () => {
  return { type: UserActionTypes.USER_LOADING };
};

export const userLoadingSuccess = (user: IUser | null) => {
  return {
    type: UserActionTypes.USER_LOADING_SUCCESS,
    payload: { user },
  };
};

export const userLoadingFailed = (error: string) => {
  return { type: UserActionTypes.USER_LOADING_FAILED, payload: { error } };
};
