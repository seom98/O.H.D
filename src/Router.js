import React from "react";
import { BrowserRouter, Routes, Route, NavLink, /*Link*/ } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>Home</NavLink>
        {/* <Link to='/login'>로그인</Link>
        <Link to='/SignUp'>회원가입</Link> */} 
        {/*딱히 필요없어보여서 일단 뺌*/}
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}