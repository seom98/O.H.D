import React, { useState } from "react";


const SignIn = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ userid: userId, pw }),
    });

    // const data = await response.json(); //리코일 쓸때 필요 

    if (response.ok) {
      setIsLoggedIn(true);
      // 
    }
  };

  if (isLoggedIn) {
    window.location.href = 'http://localhost:3000/rooms'
  }

  return (
    <>
      <h1>로그인페이지</h1>
      <div>
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userId">아이디:</label><br />
          <input
            type="text"
            name="userId"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          /><br />

          <label htmlFor="pw">비밀번호:</label><br />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          /><br />

          <button type="submit" value="로그인"> 로그인 </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;