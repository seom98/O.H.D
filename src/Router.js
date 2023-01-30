import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <Link to='/login'>Login</Link>
        <Link to='/SignUp'>SignUp</Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}