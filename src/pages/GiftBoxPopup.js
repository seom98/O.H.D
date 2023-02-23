import React, { useState } from "react";
import GiftBoxChooser from "./GiftBoxChooser";
import "./Pages.css"
import { useParams } from 'react-router-dom';

const GiftBoxPopup = ({setGiftList, setModalIsOpen}) => {
  const [step, setStep] = useState(1);
  const [gto, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [gfrom, setFrom] = useState("");
  const [boxColor, setBoxColor] = useState();
  const [ribbonColor, setRibbonColor] = useState();
  const uuidId = useParams().uuidId;

  const handleNext = () => { setStep(2); };

  const handlePrevious = () => { setStep(1); }; 

  
  const completeHandler = async () => {

    console.log(uuidId , "?")
    
    const response = await fetch(`http://localhost:8080/api/write/${uuidId}`, {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({
        gto,
        message,
        gfrom,
        boxColor,
        ribbonColor,
      }  )
       
    });
    const data = await response.json()
    
    console.log(data)
    
    setGiftList((old) => [...old, {message, gfrom, gto, boxColor, ribbonColor}]);
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
            value={gto}
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
            value={gfrom}
            onChange={(e) => setFrom(e.target.value)}
          /><br />
          
          <button className="button1" onClick={handleNext}>다음</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <GiftBoxChooser setBoxColor={setBoxColor} setRibbonColor={setRibbonColor} />
          <button className="button2" onClick={handlePrevious}>이전</button>
          <button className="button2" onClick={completeHandler}>완료</button>
        </div>
      )}
      
    </div>
  );
};

export default GiftBoxPopup;
