import React, {useState} from "react";
import {useNavigate} from "react-router";
import "./Pages.css"

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [dDay, setDDay] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ title, dDay });

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ title, dDay })
    });

    const data = await response.json();


    if (response.ok) {
      const uuidId = data
      navigate(`/rooms/${uuidId}`);
    }

  };

  return (
      <>
        <h1>회원가입페이지</h1>
        <div>
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>

            <label htmlFor="title">내 방 이름:</label><br />
            <input
                className="input"
                type="text"
                id="title"
                placeholder="방 이름을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br />

            <label htmlFor="dDay">D-day:</label><br />
            <input
                className="input"
                type="date"
                id="dDay"
                value={dDay}
                onChange={(e) => setDDay(e.target.value)}
            /><br />

            <button className="button1" type="submit" value="생성하기"> 생성하기 </button>
          </form>
        </div>
      </>
  );
};

export default SignUp;