import React, { useState } from "react";
import GiftBoxChooser from "./GiftBoxChooser";


const GiftBoxPopup = ({setGiftList, setModalIsOpen}) => {
  const [step, setStep] = useState(1);
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");

  const handleNext = () => { setStep(2); };

  const handlePrevious = () => { setStep(1); };

  const completeHandler = () => {
    setGiftList((old) => [...old, {message, from ,to}]);
    setModalIsOpen(false);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <label for="To">To:</label><br />
          <input
            type="text"
            placeholder="받는사람"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          /><br />

          <label for="Message">메시지:</label><br />
          <input
            type="text"
            placeholder="메시지"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /><br />
          
          <label for="From">From:</label><br />
          <input
            type="text"
            placeholder="주는사람"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          /><br />
          
          <button onClick={handleNext}>다음</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <GiftBoxChooser />
          <button onClick={handlePrevious}>이전</button>
          <button onClick={completeHandler}>완료</button>
        </div>
      )}
      
    </div>
  );
};

export default GiftBoxPopup;
