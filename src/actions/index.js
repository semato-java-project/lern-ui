import axios from 'axios';
import {ACTION_TYPES} from "./actionTypes";
import {getAPIAddress} from "../api-config";
import jwtDecode from 'jwt-decode';

// --- TOKEN ---
const AUTH_TOKEN = 'AUTH_TOKEN';
export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const isTokenValid = () => getToken() && jwtDecode(getToken()).sub === 'semato-learn-project';
export const getHeaders = () => ({Authorization: `Bearer ${getToken()}`});


// --- AUTH ---
export const logInUser = token => {
    localStorage.setItem(AUTH_TOKEN, token)
};

export const logOutUser = () => dispatch => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({type: ACTION_TYPES.USER_LOGOUT});
};

export const authenticate = (email, password) => dispatch => {
    dispatch({type: ACTION_TYPES.AUTHENTICATION_REQUEST});

    return axios
        .post(`${getAPIAddress()}/auth/signin`,{
            email,
            password
        })
        .then(response => logInUser(response.data))
        .then(() => dispatch({type: ACTION_TYPES.AUTHENTICATION_SUCCESS}))
        .catch(err => {
            console.log(err);
            dispatch({type: ACTION_TYPES.AUTHENTICATION_FAILURE})
        })
};