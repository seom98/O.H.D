import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import WritersPage from "./pages/WritersPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path={`/rooms/:uuidId`} element={<RoomPage />} />
        <Route path={`/writers/:uuidId`} element={<WritersPage />} />
      </Routes>
    </BrowserRouter>
  );
}