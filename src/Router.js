import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import WritersPage from "./pages/WritersPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'><button style={{ color: "red" }}>Home</button></NavLink>
        <Link to='/Writers'><button style={{ color: "red" }}>Writers</button></Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/rooms' element={<RoomPage />} />
        <Route path='/writers' element={<WritersPage />} />
      </Routes>
    </BrowserRouter>
  );
}