import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js"
import Homepage from "../src/Screens/Homepage"
import Track from "../src/Screens/TrackAmbulance";
import Pastride from "../src/Screens/Pastride";
import DriverProfile from "../src/Screens/DriverProfile";
import Login from "../src/Screens/Login";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Signup from "./Screens/Signup"

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem("token") != null) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

const App = () => {

  return (
    <>
    {console.log(localStorage.getItem("miniShowPast"))}
    {console.log(localStorage.getItem("miniShowPast"))}

      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute
            path="/home"
            exact
            component={Homepage}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path="/pastride"
            exact
            component={Pastride}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path="/track"
            exact
            component={Track}
            meta={{ auth: false }}
          />
          <GuardedRoute
            path="/profile"
            exact
            component={DriverProfile}
            meta={{ auth: true }}
          />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Redirect to="/login" />
        </Switch>
      </GuardProvider>
      <Footer />
    </>
  );
}

export default App
