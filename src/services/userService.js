import jwtDecode from 'jwt-decode';
import {ACTION_TYPES} from "../store/reducers/actionTypes";
import {authRequest, getList, requestTypes} from './httpService'
import {USER_ROLES} from "../utils/types";

// --- TOKEN ---
const AUTH_TOKEN = 'AUTH_TOKEN';
export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const isTokenValid = () => getToken() && jwtDecode(getToken()).sub === 'semato-learn-project';
const getJWTUser = token => jwtDecode(token).userJwtInfo;

// --- LOGIN / LOGOUT ---
export const logInUser = token => localStorage.setItem(AUTH_TOKEN, token);

export const logOutUser = () => dispatch => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({type: ACTION_TYPES.USER_LOGOUT});
};

// --- AUTHENTICATE USER ---
export const authenticate = (email, password) => async dispatch => {
    dispatch({type: ACTION_TYPES.AUTHENTICATION_REQUEST});

    try {
        let {data: token} = await authRequest(email, password);
        dispatch({type: ACTION_TYPES.AUTHENTICATION_SUCCESS, payload: getJWTUser(token)});
        logInUser(token);
        let userRole = getJWTUser(token).role;
        if (userRole === USER_ROLES.ROLE_LECTURER.API_NAME) dispatch(getList(requestTypes.GET_COURSES));
        dispatch(getList(requestTypes.GET_NEWS));
        return userRole;

    } catch (ex) {
        dispatch({type: ACTION_TYPES.AUTHENTICATION_FAILURE});
        return null;
    }
};


