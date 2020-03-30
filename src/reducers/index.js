const initialState = {
    isUserLogged: false,
    isAuthenticationFailure: false,
    dataChangeSuccess: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'test':
            return {
                ...state,
                test:true
            };

        default:
            return state;
    }
};

export default rootReducer;
