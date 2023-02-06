// import React from "react";
// import { Link } from "react-router-dom";

// export default function SignUpPage() {
//   return (
//     <>
//       <h1>회원가입페이지</h1>
//       <div>
//         <h2>Welcome</h2>
//         <form>
//           <label for="userid">아이디:</label><br />
//           <input type="text" id="userid" placeholder="아이디를 입력해주세요." /><br />
//           <label for="pw">비밀번호:</label><br />
//           <input type="password" id="pw" placeholder="비밀번호를 입력해주세요." /><br />
//           <label for="room">내 방 이름:</label><br />
//           <input type="text" id="room" placeholder="방 이름을 입력해주세요." /><br />
//           <label for="dDay">D-day:</label><br />
//           <input type="date" id="dDay" /><br />
//           <Link to="/rooms"><button className="submit" type="submit" value="생성하기"> 생성하기 </button></Link>
//         </form>
//       </div>
//     </>
//   );
// }


import React, {useState} from "react";
import {useNavigate} from "react-router";


const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [dDay, setDDay] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ userId, pw, title, dDay });

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ userId, pw, title, dDay })
    });

    const data = await response.json();


    if (response.ok) {
      const uuidId = data["uuidId"]
      navigate(`/rooms/${uuidId}`);
    }

  };

  return (
      <>
        <h1>회원가입페이지</h1>
        <div>
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>

            <label htmlFor="userid">아이디:</label><br/>
            <input
                type="text"
                id="userid"
                placeholder="아이디를 입력해주세요"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            /><br/>

            <label htmlFor="pw">비밀번호:</label><br/>
            <input
                type="password"
                id="pw"
                placeholder="비밀번호를 입력해주세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            /><br/>

            <label htmlFor="title">내 방 이름:</label><br />
            <input
                type="text"
                id="title"
                placeholder="방 이름을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br />

            <label htmlFor="dDay">D-day:</label><br />
            <input
                type="date"
                id="dDay"
                value={dDay}
                onChange={(e) => setDDay(e.target.value)}
            /><br />

            <button className="submit" type="submit" value="생성하기"> 생성하기 </button>
          </form>
        </div>
      </>
  );
};

export default SignUp;