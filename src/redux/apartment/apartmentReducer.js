import {
  USER_CREATE_APARTMENT_REQUEST,
  USER_CREATE_APARTMENT_SUCCESS,
  USER_CREATE_APARTMENT_FAIL,
} from "./apartmentConstant";

export const createApartmentReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_APARTMENT_REQUEST:
      return { loading: true };
    case USER_CREATE_APARTMENT_SUCCESS:
      return { loading: false, apartmentInfo: action.payload };
    case USER_CREATE_APARTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
