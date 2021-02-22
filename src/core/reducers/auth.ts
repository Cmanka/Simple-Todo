import { AuthAction, AuthActionTypes } from '../actions/auth';

export interface State {
  data: {
    uid: string;
  };
  isLoading: boolean;
  error: string;
  authorized: boolean;
}

const initialState: State = {
  data: null,
  isLoading: false,
  authorized: false,
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: AuthAction
): State => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
        authorized: false,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authorized: true,
        error: null,
        data: {
          uid: action.payload.uid,
        },
      };
    }
    case AuthActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        authorized: false,
        error: action.payload.error,
      };
    }
    case AuthActionTypes.REGISTER: {
      return {
        ...state,
        isLoading: true,
        authorized: false,
      };
    }
    case AuthActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authorized: true,
        error: null,
        data: {
          uid: action.payload.uid,
        },
      };
    }
    case AuthActionTypes.REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        authorized: false,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
