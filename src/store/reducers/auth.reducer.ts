import {
  AuthUnionType,
  SIGNIN,
  SIGNIN_FAIL,
  SIGNIN_SUCESS,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "../actions/auth.actions";

export interface AuthState {
  signup: {
    loaded: boolean;
    success: boolean;
    message: string;
  };
  signin: {
    loaded: boolean;
    success: boolean;
    message: string;
  };
}

const initialState: AuthState = {
  signup: {
    loaded: false,
    success: false,
    message: "",
  },
  signin: {
    loaded: false,
    success: false,
    message: "",
  },
};

export default function authReducer(
  state = initialState,
  action: AuthUnionType
) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
        },
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: action.message,
        },
      };
    case SIGNUP_RESET:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: "",
        },
      };
    case SIGNIN:
      return {
        ...state,
        signin: {
          loaded: false,
          success: false,
        },
      };
    case SIGNIN_SUCESS:
      return {
        ...state,
        signin: {
          loaded: true,
          success: true,
        },
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        signin: {
          loaded: true,
          success: false,
          message: action.message,
        },
      };
    default:
      return state;
  }
}
