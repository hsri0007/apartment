import {
  VISITORS_REQUEST,
  VISITORS_SUCCESS,
  VISITORS_FAILED,
} from "./vistorsConstant.js";

export const visitorsReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITORS_REQUEST:
      return { loading: false };
    case VISITORS_SUCCESS:
      return { loading: true };
    case VISITORS_FAILED:
      return { loading: false };
    default:
      return state;
  }
};
