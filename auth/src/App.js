import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history , onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin" >
            <Signin onSignIn={onSignIn}></Signin>
          </Route>
          <Route exact path="/auth/signup" >
            <Signup onSignIn={onSignIn}></Signup>
            </Route> 

        </Switch>
      </Router>
    </StylesProvider>
  );
};
