import {
  AuthUnionType,
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
}

const initialState: AuthState = {
  signup: {
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
    default:
      return state;
  }
}
