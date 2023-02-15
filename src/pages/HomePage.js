import React from "react";
import { Link } from "react-router-dom";
import GiftBoxIcon from "./GiftBoxIcon";
import "./HomePage.css"


function HomePage() {
  const colors = ['red', 'green', 'blue', 'white'];
  const a = parseInt(Math.random() * 4 + 1);
  const b = parseInt(Math.random() * 4);

  return (
    <div>
      <h1>O.H.D</h1>
      <h6>Oh! happy day</h6>
      <div>
        <GiftBoxIcon color={colors[b]} number={a} />
      </div>


      <div>
        <Link to="/signin"><button>로그인</button></Link><br />
        <Link to="/signup"><button>회원가입</button></Link>
      </div>
    </div>
  );
}

export default HomePage; 