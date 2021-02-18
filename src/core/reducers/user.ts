import { UserActionTypes } from '../actions/user';
import { IUser } from './../interfaces/user';

export interface State {
  data: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  data: null,
  isLoading: false,
  error: null,
};

export const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case UserActionTypes.USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserActionTypes.USER_LOADING_SUCCESS: {
      return {
        ...state,
        data: action.payload.user,
        isLoading: false,
      };
    }
    case UserActionTypes.USER_LOADING_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
