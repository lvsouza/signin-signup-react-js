import { Route, Switch, Redirect } from "react-router";

import { Dashboard } from "../pages";

export const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />

      <Route exact path="*" component={() => <Redirect to="/dashboard" />} />
    </Switch>
  );
}
