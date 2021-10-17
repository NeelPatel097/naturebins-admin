import axios from "axios";
import axiosInstance from "../helpers/axios";
import { authConstants } from "./constants"

export const login =(user) => {

    console.log(user);

    dispatch({ type: authConstants.LOGIN_REQUEST });
    return async (dispatch) => {

        // const res = await axiosInstance
        const res = await axios.post('/admin/signin', {
            
        });

        if(res.status === 200) {
            const { token, user} = res.data;
            localStorage.setItem('token', token);
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if(res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

    }
}