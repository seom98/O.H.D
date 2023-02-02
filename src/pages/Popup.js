import React, { useState } from "react";

const Popup = () => {
  const [step, setStep] = useState(1);
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleNext = () => {setStep(2); };

  const handlePrevious = () => {setStep(1); };

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
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <button onClick={handlePrevious}>Previous</button>
        </div>
      )}
    </div>
  );
};

export default Popup;
