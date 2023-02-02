import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/signin"><button>Login</button></Link>
      <Link to="/signup"><button>SignUp</button></Link>
    </div>
  );
}

export default HomePage;