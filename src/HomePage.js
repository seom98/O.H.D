import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/signUp">SignUp</Link></button>
    </div>
  );
}

export default HomePage;