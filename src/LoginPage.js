import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <h1>로그인페이지</h1>
      <div>
        <h2>Welcome</h2>
        <form>
          <label for="id">아이디:</label>
          <input type="text" id="id" placeholder="아이디를 입력해주세요." /><br></br>
          <label for="pw">비밀번호:</label>
          <input type="password" id="pw" placeholder="비밀번호를 입력해주세요." /><br></br>
          <button className="submit" type="submit" value="로그인"><Link to="/room"> Login </Link></button>
        </form>
      </div>
    </>
  );
}