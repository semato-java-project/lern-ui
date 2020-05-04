import axios from 'axios';
import {ACTION_TYPES} from "../reducers/actionTypes";
import {getAPIAddress} from "../api-config";
import jwtDecode from 'jwt-decode';

// --- TOKEN ---
const AUTH_TOKEN = 'AUTH_TOKEN';
export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const isTokenValid = () => getToken() && jwtDecode(getToken()).sub === 'semato-learn-project';
export const getHeaders = () => ({Authorization: `Bearer ${getToken()}`});


// --- LOGIN / LOGOUT ---
export const logInUser = token => localStorage.setItem(AUTH_TOKEN, token);

export const logOutUser = () => dispatch => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({type: ACTION_TYPES.USER_LOGOUT});
};

// --- AUTH ---
export const authenticate = (email, password) => dispatch => {
    dispatch({type: ACTION_TYPES.AUTHENTICATION_REQUEST});

    return axios
        .post(`${getAPIAddress()}/auth/signin`, {
            email,
            password
        })
        .then(response => {
            dispatch({type: ACTION_TYPES.AUTHENTICATION_SUCCESS, payload: jwtDecode(response.data).userJwtInfo});
            logInUser(response.data);
            return jwtDecode(response.data).userJwtInfo.role
        })
    // --- CATCH IMPLEMENTED INSIDE SIGNINFORM ---
};

// --- FETCH ---
export const fetchItems = (actionType, params) => dispatch => {

    return axios
        .get(`${getAPIAddress()}/${actionType.path}/`, {
            params: params || actionType.params,
            headers: getHeaders(),
        })
        .then(({data}) => dispatch({
            type: ACTION_TYPES.FETCH_SUCCESS,
            payload: {
                items: data,
                itemType: actionType.itemType,
            },
        }))
        .catch(err => {
            console.log(err);
        });
};


// --- FETCH ---
export const fetchItemDetails = (actionType, id) => dispatch => {

    return axios
        .get(`${getAPIAddress()}/${actionType.path}/${id}`, {
            headers: getHeaders(),
        })
        .then(({data}) => dispatch({
            type: ACTION_TYPES.FETCH_DETAILS_SUCCESS,
            payload: {
                item: data,
                itemType: actionType.itemType,
            },
        }))
        .catch(err => {
            console.log(err);
        });
};


// --- FETCH DATA---
export const addItem = (actionType, data, params) => dispatch => {

    return axios
        .post(`${getAPIAddress()}/${actionType.path}/`, {
            ...data
        }, {
            params: params || actionType.params,
            headers: getHeaders(),
        })
};

// --- EDIT DATA---
export const editItem = (actionType, id, data, params) => dispatch => {

    return axios
        .put(`${getAPIAddress()}/${actionType.path}/${id}`, {
            ...data
        }, {
            params: params || actionType.params,
            headers: getHeaders(),
        })
};