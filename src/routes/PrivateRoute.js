import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {routes} from '../routes';
import {useSelector} from "react-redux";
import {isTokenValid} from "../services/userService";

const PrivateRoute = ({component: Component, acceptedRoles, ...restProps}) => {

    let isUserLogged = useSelector(state => state.isUserLogged);
    const role = useSelector(state => (state.currentUser && state.currentUser.role) || '');

    return (
        <Route
            {...restProps}
            render={props => {
                return isUserLogged && isTokenValid() && acceptedRoles.includes(role) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: routes.HOME, state: {from: props.location}}}/>
                );
            }}
        />
    );
};

export default PrivateRoute;