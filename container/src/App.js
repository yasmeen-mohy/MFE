import React,{lazy,Suspense,useState, useEffect} from "react";
import { Router, Route , Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history'
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingLazy = lazy(()=>import('./components/Marketing'))
const AuthLazy = lazy(()=>import('./components/Auth'))
const DashboardLazy = lazy(()=>import('./components/Dashboard'))
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history=createBrowserHistory();
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard')
    }
  },[isSignedIn])

  return (
    <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={()=>{setIsSignedIn(true)}}></AuthLazy>
              </Route> 

              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/"/>}
              <DashboardLazy></DashboardLazy>
              </Route> 

            <Route path="/" component={MarketingLazy} />

          </Switch>
          </Suspense>
        </div>
    </StylesProvider>
      </Router>
  );
};
