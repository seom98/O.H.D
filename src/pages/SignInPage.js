// import React from "react";
// import { Link } from "react-router-dom";

// export default function SignInPage() {
//   return (
//     <>
//       <h1>로그인페이지</h1>
//       <div>
//         <h2>Welcome</h2>
//         <form method="POST">
//           <label for="userid">아이디:</label><br />
//           <input type="text" id="userid" placeholder="아이디를 입력해주세요." /><br />
//           <label for="pw">비밀번호:</label><br />
//           <input type="password" id="pw" placeholder="비밀번호를 입력해주세요." /><br />
//           <Link to="/rooms"><button className="submit" type="submit" value="로그인"> Login </button></Link>
//         </form>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";


const Login = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ userId, pw }),
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <UserProfile />;
  }

  return (
    <>
      <h1>로그인페이지</h1>
      <div>
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit}>
          <label for="userid">아이디:</label><br />
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          /><br />

          <label for="pw">비밀번호:</label><br />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          /><br />

          <button className="submit" type="submit" value="로그인"> 로그인 </button>
        </form>
      </div>
    </>
  );
};

const UserProfile = () => {
  return <div>Welcome! Your profile information will be displayed here.</div>;
};

export default Login;