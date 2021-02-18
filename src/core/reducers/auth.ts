import { AuthActionTypes } from '../actions/auth';

export interface State {
  data: {
    uid: string;
  } | null;
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
    case AuthActionTypes.LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
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
        error: action.payload.error,
      };
    }
    case AuthActionTypes.REGISTER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
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
      };
    }
    default: {
      return state;
    }
  }
};
