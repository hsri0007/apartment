import {
  SELLING_REQUEST,
  SELLING_SUCCESS,
  SELLING_FAIL,
} from "./sellingConstants";
// import Axios from "../../api/axios";
import Axios from "axios";

export const sellingFlatAction = (datas) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELLING_REQUEST,
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
    } = await Axios.post(`/api/user/add-sellflat`, sendData, config);

    dispatch({
      type: SELLING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SELLING_FAIL,
      payload: "error",
    });
  }
};
