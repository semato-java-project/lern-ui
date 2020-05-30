import axios from 'axios';
import {ACTION_TYPES} from "../reducers/actionTypes";
import {getAPIAddress} from "../api-config";
import {getToken} from "./userService";

export const getHeaders = () => ({Authorization: `Bearer ${getToken()}`});

// --- AUTH ---
export const authRequest = (email, password) => {
    return axios
        .post(`${getAPIAddress()}/auth/signin`, {
            email,
            password
        })
};

// --- FETCH LIST ---
export const getList = (actionType, params) => dispatch => {
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
export const getDetails = (actionType) => dispatch => {
    return axios
        .get(`${getAPIAddress()}/${actionType.path}/`, {
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

// --- CREATE DATA---
export const createItem = (actionType, data, params) => dispatch => {
    return axios
        .post(`${getAPIAddress()}/${actionType.path}/`, {
            ...data
        }, {
            params: params || actionType.params,
            headers: getHeaders(),
        })
};

// --- UPDATE DATA---
export const updateItem = (actionType, data, params) => dispatch => {
    return axios
        .put(`${getAPIAddress()}/${actionType.path}/`, {
            ...data
        }, {
            params: params || actionType.params,
            headers: getHeaders(),
        })
};