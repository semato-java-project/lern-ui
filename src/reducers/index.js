import {ACTION_TYPES} from "../actions/actionTypes";

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

        default:
            return state;
    }
};

export default rootReducer;
