export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const SIGNUP_RESET = "SIGNUP_RESET";

export interface SignupPayload {
  email: string;
  name: string;
  password: string;
}

// action type
export interface SignupAction {
  type: typeof SIGNUP;
  payload: SignupPayload;
}

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  message: string;
}

export interface SignupResetAction {
  type: typeof SIGNUP_RESET;
}

// action creator
export const signup = (payload: SignupPayload): SignupAction => {
  return {
    type: SIGNUP,
    payload,
  };
};

export const signupSuccess = (): SignupSuccessAction => ({
  type: SIGNUP_SUCCESS,
});

export const signupFail = (message: string): SignupFailAction => ({
  type: SIGNUP_FAIL,
  message,
});

export const resetSignup = () => ({
  type: SIGNUP_RESET,
});

export type AuthUnionType =
  | SignupAction
  | SignupSuccessAction
  | SignupFailAction
  | SignupResetAction;
