import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard, SignIn, SignUp } from '../pages';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />

                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="*" component={() => <Redirect to="/sign-in" />} />
            </Switch>
        </BrowserRouter>
    );
}
