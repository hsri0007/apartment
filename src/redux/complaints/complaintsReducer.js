import {
  USER_CREATE_COMPLAINTS_REQUEST,
  USER_CREATE_COMPLAINTS_SUCCESS,
  USER_CREATE_COMPLAINTS_FAIL,
} from "./complaintsConstant";

export const createComplaintsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_COMPLAINTS_REQUEST:
      return { loading: true };
    case USER_CREATE_COMPLAINTS_SUCCESS:
      return { loading: false, complaints: action.payload };
    case USER_CREATE_COMPLAINTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
