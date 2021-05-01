import { Route, Switch, Redirect } from "react-router";

import { SignIn, SignUp } from "../pages";

export const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />

      <Route exact path="*" component={() => <Redirect to="/sign-in" />} />
    </Switch>
  );
}
