import axios from "axios";
import { loginFailed, loginStart, loginSuccess,
        logOutFailed,logOutStart,logOutSuccess, 
        registerStart, registerSuccess, registerFailed } from "./authSlice";


export const loginUser = async(user, dispatch) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, user);
        dispatch(loginSuccess(res.data));
        return true;
    } catch (error) {
        dispatch(loginFailed());
        return false;
    }
};

export const logOut = async(dispatch,navigate) =>{
    dispatch(logOutStart());
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}auth/logout`);
        dispatch(logOutSuccess());
        navigate("/")
    } catch (error) {
        dispatch(logOutFailed());
    }
};

export const registerUser = async(user, dispatch) =>{
        dispatch(registerStart());
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}user/add`, user);
            dispatch(registerSuccess());
            return true;
        } catch (error) {
            dispatch(registerFailed(error.response.data));
            return false;
        }
    };

