import * as types from "./actionType"
import axios from "axios"

export const getaddressreq = () => {
    return { type: types.GET_ADDRESS_REQUEST }
}
export const getaddresssucc = (payload) => {
    return { type: types.GET_ADDRESS_SUCCESS, payload }
}
export const getaddressfail = () => {
    return { type: types.GET_ADDRESS_ERROR }
}

export const getAdd = (params) => {
    return async (dispatch) => {
      dispatch(getaddressreq());
      console.log("fdghjsk",params)
      try {
            const resp = await axios.get(`https://myntra-data.onrender.com/clothing`,{params:params})
            const rowsWithId = resp.data.map((row, index) => ({
                      ...row,
                      id:index +1,
                    }));
            dispatch(getaddresssucc(rowsWithId))
        } catch (e) {
            dispatch(getaddressfail())
        }
    };
  };
  