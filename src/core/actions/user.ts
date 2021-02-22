import { Action } from '../interfaces/action';
import { IUser } from './../interfaces/user';

export enum UserActionTypes {
  USER_PROFILE = `[User] USER_PROFILE`,
  USER_PROFILE_SUCCESS = '[User] USER_PROFILE_SUCCESS',
  USER_PROFILE_FAILED = '[User] USER_PROFILE_FAILED',
  USER_AVATAR = '[User] USER_AVATAR',
  USER_AVATAR_SUCCESS = '[User] USER_AVATAR_SUCCESS',
  USER_AVATAR_FAILED = '[User] USER_AVATAR_FAILED',
  USER_UPDATE_AVATAR = '[User] USER_UPDATE_AVATAR',
  USER_UPDATE_AVATAR_SUCCESS = '[User] USER_UPDATE_AVATAR_SUCCESS',
  USER_UPDATE_AVATAR_FAILED = '[User] USER_UPDATE_AVATAR_FAILED',
  USER_CLEAR_DATA = '[User] USER_CLEAR_DATA',
}

export const userProfile = (): IUserProfile => {
  return { type: UserActionTypes.USER_PROFILE };
};

export const userProfileSuccess = (user: IUser): IUserProfileSuccess => {
  return {
    type: UserActionTypes.USER_PROFILE_SUCCESS,
    payload: { user },
  };
};

export const userProfileFailed = (error: string): IUserProfileFailed => {
  return { type: UserActionTypes.USER_PROFILE_FAILED, payload: { error } };
};

export const userAvatar = (): IUserAvatar => {
  return { type: UserActionTypes.USER_AVATAR };
};

export const userAvatarSuccess = (avatar: string): IUserAvatarSuccess => {
  return { type: UserActionTypes.USER_AVATAR_SUCCESS, payload: { avatar } };
};

export const userAvatarFailed = (error: string): IUserAvatarFailed => {
  return { type: UserActionTypes.USER_AVATAR_FAILED, payload: { error } };
};

export const userUpdateAvatar = (): IUserUpdateAvatar => {
  return { type: UserActionTypes.USER_UPDATE_AVATAR };
};

export const userUpdateAvatarSuccess = (): IUserUpdateAvatarSuccess => {
  return { type: UserActionTypes.USER_UPDATE_AVATAR_SUCCESS };
};

export const userUpdateAvatarFailed = (
  error: string
): IUserUpdateAvatarFailed => {
  return {
    type: UserActionTypes.USER_UPDATE_AVATAR_FAILED,
    payload: { error },
  };
};

export const userClearData = (): IUserClearData => {
  return { type: UserActionTypes.USER_CLEAR_DATA };
};

interface IUserProfile extends Action<UserActionTypes> {
  type: UserActionTypes.USER_PROFILE;
}

interface IUserProfileSuccess extends Action<UserActionTypes> {
  type: UserActionTypes.USER_PROFILE_SUCCESS;
  payload: { user: IUser };
}

interface IUserProfileFailed extends Action<UserActionTypes> {
  type: UserActionTypes.USER_PROFILE_FAILED;
  payload: { error: string };
}

interface IUserAvatar extends Action<UserActionTypes> {
  type: UserActionTypes.USER_AVATAR;
}

interface IUserAvatarSuccess extends Action<UserActionTypes> {
  type: UserActionTypes.USER_AVATAR_SUCCESS;
  payload: { avatar: string };
}

interface IUserAvatarFailed extends Action<UserActionTypes> {
  type: UserActionTypes.USER_AVATAR_FAILED;
  payload: { error: string };
}

interface IUserUpdateAvatar extends Action<UserActionTypes> {
  type: UserActionTypes.USER_UPDATE_AVATAR;
}

interface IUserUpdateAvatarSuccess extends Action<UserActionTypes> {
  type: UserActionTypes.USER_UPDATE_AVATAR_SUCCESS;
}

interface IUserUpdateAvatarFailed extends Action<UserActionTypes> {
  type: UserActionTypes.USER_UPDATE_AVATAR_FAILED;
  payload: { error: string };
}

interface IUserClearData extends Action<UserActionTypes> {
  type: UserActionTypes.USER_CLEAR_DATA;
}

export type UserAction =
  | IUserProfile
  | IUserProfileSuccess
  | IUserProfileFailed
  | IUserAvatar
  | IUserAvatarSuccess
  | IUserAvatarFailed
  | IUserUpdateAvatar
  | IUserUpdateAvatarSuccess
  | IUserUpdateAvatarFailed
  | IUserClearData;
