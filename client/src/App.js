import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";


function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/sign-up" component={Register} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
