import { UserAction, UserActionTypes } from '../actions/user';
import { IUser } from '../interfaces/user';

export interface State {
  data: IUser;
  isLoading: boolean;
  error: string;
  avatar: string;
  isAvatarLoading: boolean;
}

const initialState: State = {
  data: null,
  isLoading: false,
  error: null,
  avatar: null,
  isAvatarLoading: null,
};

export const reducer = (
  state: State = initialState,
  action: UserAction
): State => {
  switch (action.type) {
    case UserActionTypes.USER_PROFILE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserActionTypes.USER_PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.payload.user,
        isLoading: false,
      };
    }
    case UserActionTypes.USER_PROFILE_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case UserActionTypes.USER_AVATAR: {
      return {
        ...state,
        isAvatarLoading: true,
      };
    }
    case UserActionTypes.USER_AVATAR_SUCCESS: {
      return {
        ...state,
        avatar: action.payload.avatar,
        isAvatarLoading: false,
      };
    }
    case UserActionTypes.USER_AVATAR_FAILED: {
      return {
        ...state,
        isAvatarLoading: false,
        error: action.payload.error,
      };
    }
    case UserActionTypes.USER_UPDATE_AVATAR: {
      return {
        ...state,
        isAvatarLoading: true,
      };
    }
    case UserActionTypes.USER_UPDATE_AVATAR_SUCCESS: {
      return {
        ...state,
        isAvatarLoading: false,
      };
    }
    case UserActionTypes.USER_UPDATE_AVATAR_FAILED: {
      return {
        ...state,
        isAvatarLoading: false,
        error: action.payload.error,
      };
    }
    case UserActionTypes.USER_CLEAR_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};
