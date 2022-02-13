// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { PATH } from "../../config";
import { useAuth } from "./ProvideAuth";
function PublicRoute({ children, ...rest }) {

    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (auth.yodha_mlh_user && auth.yodha_mlh_user.token) ? (
                    <Redirect
                        to={{
                            pathname: PATH.DASHBOARD,
                            state: { from: location },
                        }}
                    />
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        />
    );
}
export default PublicRoute;

