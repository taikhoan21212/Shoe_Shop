import axios from "axios";
import { Navigate } from "react-router-dom";
import { loginFailed, loginStart, loginSuccess,
        logOutFailed,logOutStart,logOutSuccess, 
        registerStart, registerSuccess, registerFailed } from "./authSlice";

export const loginUser = async(user, dispatch, Navigate) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, user);
        dispatch(loginSuccess(res.data));
        Navigate("/")
    } catch (error) {
        dispatch(loginFailed());
    }
};


export const logOut = async(dispatch,navigate) =>{
    dispatch(logOutStart());
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}auth/logout`);
        dispatch(logOutSuccess());
        //dispatch(loginSuccess(null));
        
        navigate("/")
    } catch (error) {
        dispatch(logOutFailed());
    }
}

    export const registerUser = async(user, dispatch, Navigate) =>{
        dispatch(registerStart());
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}user/register`, user);
            dispatch(registerSuccess());
            Navigate("/login")
        } catch (error) {
            dispatch(registerFailed());
        }
    };

