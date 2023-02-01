import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, /*Link*/ } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import WritersPage from "./pages/WritersPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'><button style={{color : "red"}}>Home</button></NavLink>
        {/* <Link to='/login'>로그인</Link>
        <Link to='/SignUp'>회원가입</Link> */} 
        {/*딱히 필요없어보여서 일단 뺌*/}
        <Link to='/Writers'><button style={{color : "red"}}>Writers</button></Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/room' element={<RoomPage />} />
        <Route path='/writers' element={<WritersPage />} />
      </Routes>
    </BrowserRouter>
  );
}