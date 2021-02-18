import {
  userLoading,
  userLoadingSuccess,
  userLoadingFailed,
} from '../actions/user';
import * as UserService from '../services/user';
import { Dispatch } from 'redux';
import firebase from '../firebase/index';

export const getUserThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(userLoading());
    const user = firebase.auth().currentUser;
    if (user) {
      UserService.getUser(user.uid).then(
        (data) => {
          dispatch(userLoadingSuccess(data));
        },
        (error) => {
          dispatch(userLoadingFailed(error.message));
        }
      );
    } else {
      dispatch(userLoadingSuccess(null));
    }
  };
};
