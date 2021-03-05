import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_CREATE_ADMIN_REQUEST,
  USER_CREATE_ADMIN_SUCCESS,
  USER_CREATE_ADMIN_FAIL,
} from "./userConstant";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userCreateAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_ADMIN_REQUEST:
      return { loading: true, userCreated: false };
    case USER_CREATE_ADMIN_SUCCESS:
      return { loading: false, userCreated: action.payload };
    case USER_CREATE_ADMIN_FAIL:
      return { loading: false, error: "error", userCreated: false };
    default:
      return state;
  }
};
