import React from "react";
import { Link } from "react-router-dom";
import GiftBoxIcon from "./GiftBoxIcon";

function HomePage() {
  const colors = ['red', 'green', 'blue', 'white'];
  const a1 = parseInt(Math.random() * 4 + 1);
  const a2 = parseInt(Math.random() * 4 + 1);
  const a3 = parseInt(Math.random() * 4 + 1);
  const b1 = parseInt(Math.random() * 4);
  const b2 = parseInt(Math.random() * 4);
  const b3 = parseInt(Math.random() * 4);

  return (
    <div style={{display: 'flex', flexDirection:'column'}}>

      <div style={{ position: "relative", width: '100vw' }}>
        <div style={{position: "absolute", top: '40px' , left: '47px'}}>
          <GiftBoxIcon color={colors[b1]} number={a1} />
        </div>
        <div style={{position: "absolute", top: '100px', left: '95px'}}>
          <GiftBoxIcon color={colors[b2]} number={a2} />
        </div>
        <div style={{position: "absolute", top: '100px'}}>
          <GiftBoxIcon ccolor={colors[b3]} number={a3} />
        </div>
      </div>

      <div>

            <Link to="/signin"><button>로그인</button></Link>
            <Link to="/signup"><button>회원가입</button></Link>

      </div>

  </div>
  );
}

export default HomePage; 