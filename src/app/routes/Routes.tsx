import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Signin } from '../pages/signin/Signin';
import { Signup } from '../pages/signup/Signup';

export const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    );
}
