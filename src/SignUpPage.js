import React from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <>
      <h1>회원가입페이지</h1>
      <div>
        <h2>Welcome</h2>
        <form>
          <label for="id">아이디:</label>
          <input type="text" id="id" placeholder="아이디를 입력해주세요." /><br></br>
          <label for="pw">비밀번호:</label>
          <input type="password" id="pw" placeholder="비밀번호를 입력해주세요." /><br></br>
          <label for="room">내 방 이름:</label>
          <input type="text" id="room" placeholder="방 이름을 입력해주세요." /><br></br>
          <label for="dDay">D-day:</label>
          <input type="date" id="dDay" /><br></br>
          <button className="submit" type="submit" value="생성하기"><Link to="/room"> 생성하기 </Link></button>
        </form>
      </div>
    </>
  );
}