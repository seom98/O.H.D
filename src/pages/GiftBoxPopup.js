import React, { useState } from "react";
import GiftBoxChooser from "./GiftBoxChooser";
import "./button.css"

const GiftBoxPopup = ({setGiftList, setModalIsOpen}) => {
  const [step, setStep] = useState(1);
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [color, setColor] = useState()
  const [number, setNumber] = useState()

  const handleNext = () => { setStep(2); };

  const handlePrevious = () => { setStep(1); };

  const completeHandler = () => {
    setGiftList((old) => [...old, {message, from ,to, number, color}]);
    setModalIsOpen(false);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <label htmlFor="To">To:</label><br />
          <input
            className="input"
            type="text"
            placeholder="받는사람"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          /><br />

          <label htmlFor="Message">메시지:</label><br />
          <input
            className="input2"
            type="text"
            placeholder="메시지"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /><br />
          
          <label htmlFor="From">From:</label><br />
          <input
            className="input"
            type="text"
            placeholder="주는사람"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          /><br />
          
          <button className="button1" onClick={handleNext}>다음</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <GiftBoxChooser setColor={setColor} setNumber={setNumber} />
          <button className="button2" onClick={handlePrevious}>이전</button>
          <button className="button2" onClick={completeHandler}>완료</button>
        </div>
      )}
      
    </div>
  );
};

export default GiftBoxPopup;
