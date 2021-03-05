import {
  SELLING_REQUEST,
  SELLING_SUCCESS,
  SELLING_FAIL,
} from "./sellingConstants";

export const sellingReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLING_REQUEST:
      return { loading: true };
    case SELLING_SUCCESS:
      return { loading: false, sellingFlatData: action.payload };
    case SELLING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
