import {ACTION_TYPES} from "./actionTypes";

const initialState = {
    isUserLogged: false,
    authError: false
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {


        // --- AUTH ---
        case ACTION_TYPES.AUTHENTICATION_REQUEST:
            return {
                ...state,
                authError: false
            };

        case ACTION_TYPES.AUTHENTICATION_RESET:
            return {
                ...state,
                authError: false
            };

        case ACTION_TYPES.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                authError: false,
                isUserLogged: true,
                currentUser: payload,
            };

        case ACTION_TYPES.AUTHENTICATION_FAILURE:
            return {
                ...state,
                authError: true,
                isUserLogged: false,
            };

        case ACTION_TYPES.USER_LOGOUT:
            return initialState;


        // --- FETCH ---
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                [payload.itemType]: [...payload.items],
            };

        // --- FETCH ITEM DETAILS ---
        case ACTION_TYPES.FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                [payload.itemType]: payload.item,
            };

        // --- ADD COURSE ---
        case ACTION_TYPES.SET_COURSE_TO_ADD:
            return {
                ...state,
                courseToAdd: payload,
            };

        // --- CLEANUP ---
        case ACTION_TYPES.DATA_CLEANUP:

            console.log(payload);
            return {
                ...state,
                [payload]: undefined,
            };

        default:
            return state;
    }
};

export default rootReducer;
