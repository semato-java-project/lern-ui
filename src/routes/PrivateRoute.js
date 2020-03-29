import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { routes } from '../routes';
// import { isUserLogged } from '../actions';

const PrivateRoute = ({ component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={props => {
                return isUserLogged() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
                );
            }}
        />
    );
};

export default PrivateRoute;