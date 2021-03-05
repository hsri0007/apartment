import Axios from "../../api/axios";
// import Axios from "axios";
import {
  USER_CREATE_ADMIN_FAIL,
  USER_CREATE_ADMIN_REQUEST,
  USER_CREATE_ADMIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./userConstant";

export const login = (username, password, id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await Axios.get(
      `/api/user/login?apartmentId=${id}&password=${password}&username=${username}`
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("saveDatas", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: "error",
    });

    console.log(error);
  }
};
export const Register = (username, password, role, id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CREATE_ADMIN_REQUEST,
    });

    const datas = {
      apartmentId: id,
      username,
      password,
      role,
    };

    await Axios.post(`/api/user/createuser`, datas);

    dispatch({
      type: USER_CREATE_ADMIN_SUCCESS,
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_ADMIN_FAIL,
      payload: "error",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("saveDatas");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const Registers = (
  username,
  email,
  role,
  apartmentId,
  contact,
  address,
  path
) => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();
  try {
    dispatch({
      type: USER_CREATE_ADMIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        sessionid: `${userInfo.sessionId}`,
      },
    };

    const datas = {
      apartmentId,
      username,
      email,
      role,
      contact,
      address,
      path,
    };

    await Axios.post(`/api/user/add-agreement`, datas, config);

    dispatch({
      type: USER_CREATE_ADMIN_SUCCESS,
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_ADMIN_FAIL,
      payload: "error",
    });
  }
};
