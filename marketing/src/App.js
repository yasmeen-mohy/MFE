import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({history}) => {
  const generateClassName = createGenerateClassName({
    productionPrefix :'ma'
  })
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
