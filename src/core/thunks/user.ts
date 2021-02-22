import {
  userProfile,
  userProfileSuccess,
  userProfileFailed,
  userAvatar,
  userAvatarSuccess,
  userAvatarFailed,
  userUpdateAvatar,
  userUpdateAvatarSuccess,
  userUpdateAvatarFailed,
} from '../actions/user';
import * as UserService from '../services/user';
import { Dispatch } from 'redux';
import { auth } from '../firebase/index';

export const getUserThunk = () => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(userProfile());
    const user = auth.currentUser;
    if (user) {
      UserService.getUser(user.uid).then(
        (data) => {
          dispatch(userProfileSuccess(data));
          dispatch(getUserAvatarThunk());
        },
        (error) => {
          dispatch(userProfileFailed(error.message));
        }
      );
    } else {
      dispatch(userProfileSuccess(null));
    }
  };
};

export const getUserAvatarThunk = () => {
  return (dispatch: Dispatch): void => {
    dispatch(userAvatar());
    UserService.getUserAvatar(auth.currentUser.uid).then(
      (url) => {
        dispatch(userAvatarSuccess(url));
      },
      (error) => {
        dispatch(userAvatarFailed(error));
      }
    );
  };
};

export const updateUserAvatarThunk = (file: File) => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(userUpdateAvatar());
    UserService.updateUserAvatar(auth.currentUser.uid, file).then(
      () => {
        dispatch(userUpdateAvatarSuccess());
        dispatch(getUserAvatarThunk());
      },
      (error) => {
        dispatch(userUpdateAvatarFailed(error.message));
      }
    );
  };
};
