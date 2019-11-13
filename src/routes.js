import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} />
      />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
