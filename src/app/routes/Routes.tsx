import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { Signin } from '../pages/signin/Signin';
import { Signup } from '../pages/signup/Signup';

export const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />

                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="*" component={() => <Redirect to="/signin" />} />
            </Switch>
        </BrowserRouter>
    );
}
