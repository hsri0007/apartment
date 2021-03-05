import {
  STRUCTURE_CREATE_APARTMENT_REQUEST,
  STRUCTURE_CREATE_APARTMENT_SUCCESS,
  STRUCTURE_CREATE_APARTMENT_FAIL,
} from "./structureConstants";
// import Axios from "../../api/axios";
import Axios from "axios";

export const createStructureApartment = (datas) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: STRUCTURE_CREATE_APARTMENT_REQUEST,
    });
    const {
      user: { userInfo },
    } = getState();

    const sendData = {
      ...datas,
      apartmentId: userInfo.apartmentId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        sessionid: `${userInfo.sessionId}`,
      },
    };
    console.log(sendData);
    const {
      data: { data },
    } = await Axios.post(
      `/api/user/add-apartmentstructure`,
      [sendData],
      config
    );

    dispatch({
      type: STRUCTURE_CREATE_APARTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STRUCTURE_CREATE_APARTMENT_FAIL,
      payload: "error",
    });
  }
};
