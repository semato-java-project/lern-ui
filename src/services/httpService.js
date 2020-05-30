import axios from 'axios';
import {ACTION_TYPES} from "../store/reducers/actionTypes";
import {getToken} from "./userService";

// --- CONFIG ---
export const API_URL = process.env.REACT_APP_SEMATO_API_URL;
export const API_PATH = process.env.REACT_APP_SEMATO_API_PATH;
export const getAPIAddress = () => `${API_URL}/${API_PATH}`;
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


export const requestTypes = {

    // --- GET ---
    GET_COURSES: {
        path: 'course',
        itemType: 'courses',
    },
    GET_GROUPS: {
        path: 'group',
        itemType: 'groups'
    },
    GET_NEWS: {
        path: 'news',
        itemType: 'news',
    },
    GET_PUBLICATIONS: {
        path: 'publication',
        itemType: 'publications',
    },
    GET_COURSE_DETAILS: course_id => ({
        path: `course/${course_id}`,
        itemType: 'courseDetails',
    }),
    GET_PROJECT_GROUPS: course_id => ({
        path: `course/${course_id}/project-group`,
        itemType: 'projectGroups',
    }),

    // --- POST ---
    ADD_COURSE: {
        path: 'course',
    },
    ADD_NEWS: {
        path: 'news',
    },
    ADD_PUBLICATION: {
        path: 'publication',
    },
    ADD_PROJECT_GROUP: course_id => ({
        path: `course/${course_id}/project-group`,
    }),

    // --- PUT ---
    EDIT_GRADE: grade_id => ({
        path: `grade/${grade_id}`,
    }),
    EDIT_PROJECT_GROUP: group_id => ({
        path: `project-group/${group_id}`,
    }),
};
