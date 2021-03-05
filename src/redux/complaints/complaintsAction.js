import {
  USER_CREATE_COMPLAINTS_REQUEST,
  USER_CREATE_COMPLAINTS_SUCCESS,
  USER_CREATE_COMPLAINTS_FAIL,
} from "./complaintsConstant";
import Axios from "../../api/axios";

export const complaintsAction = (datas) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CREATE_COMPLAINTS_REQUEST,
    });

    const {
      user: { userInfo },
    } = getState();

    console.log(userInfo);

    const sendData = {
      ...datas,
      apartmentId: userInfo.apartmentId,
      user_name: userInfo.username,
      role: userInfo.userRole,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        sessionid: `${userInfo.sessionId}`,
      },
    };

    const {
      data: { data },
    } = await Axios.post(`/api/user/add-complaint`, sendData, config);

    console.log(data, "from Compliants");

    dispatch({
      type: USER_CREATE_COMPLAINTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_COMPLAINTS_FAIL,
      payload: "error",
    });
  }
};
