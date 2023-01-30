import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function HomePage() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>

      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default HomePage;