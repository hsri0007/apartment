import {
  USER_CREATE_APARTMENT_REQUEST,
  USER_CREATE_APARTMENT_SUCCESS,
  USER_CREATE_APARTMENT_FAIL,
} from "./apartmentConstant";
import Axios from "../../api/axios";

export const createApartment = (body, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_CREATE_APARTMENT_REQUEST,
    });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        sessionid: `${userInfo.sessionId}`,
      },
    };

    const {
      data: { data },
    } = await Axios.post(`/api/user/add-apartment`, body, config);

    dispatch({
      type: USER_CREATE_APARTMENT_SUCCESS,
      payload: data,
    });

    history.push(`${data.apartmentId}/Register`);
  } catch (error) {
    dispatch({
      type: USER_CREATE_APARTMENT_FAIL,
      payload: "error",
    });
  }
};
