import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {routes} from './index';
import {useSelector} from "react-redux";
import {getToken, isTokenValid} from "../../services/userService";

const PrivateRoute = ({component: Component, acceptedRoles, ...restProps}) => {

    let isUserLogged = useSelector(state => state.isUserLogged);
    const role = useSelector(state => (state.currentUser && state.currentUser.role) || '');

    return (
        <Route
            {...restProps}
            render={props => {
                return isUserLogged && isTokenValid(getToken()) && acceptedRoles.includes(role) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: routes.HOME, state: {from: props.location}}}/>
                );
            }}
        />
    );
};

export default PrivateRoute;