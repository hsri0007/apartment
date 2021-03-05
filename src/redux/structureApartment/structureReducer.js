import {
  STRUCTURE_CREATE_APARTMENT_REQUEST,
  STRUCTURE_CREATE_APARTMENT_SUCCESS,
  STRUCTURE_CREATE_APARTMENT_FAIL,
} from "./structureConstants";

export const createStructureApartmentReducer = (state = {}, action) => {
  switch (action.type) {
    case STRUCTURE_CREATE_APARTMENT_REQUEST:
      return { loading: true };
    case STRUCTURE_CREATE_APARTMENT_SUCCESS:
      return { loading: false, structureApartmentInfo: action.payload };
    case STRUCTURE_CREATE_APARTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
