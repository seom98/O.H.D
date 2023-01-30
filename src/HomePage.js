import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function HomePage() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default HomePage;