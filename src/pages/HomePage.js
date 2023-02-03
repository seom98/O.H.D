import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/signin"><button>로그인</button></Link>
      <Link to="/signup"><button>회원가입</button></Link>
    </div>
  );
}

export default HomePage; 