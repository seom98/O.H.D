import React, { useState } from "react";
import GiftBoxChooser from "./GiftBoxChooser";
import { useParams } from 'react-router-dom';
import "./Pages.css";
import toast,{Toaster} from 'react-hot-toast';

const GiftBoxPopup = ({ setGiftList, setModalIsOpen }) => {
  const [step, setStep] = useState(1);
  const [gto, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [gfrom, setFrom] = useState("");
  const [boxColor, setBoxColor] = useState("r");
  const [ribbonColor, setRibbonColor] = useState(1);

  const uuidId = useParams().uuidId;


  const handleNext = () => {
    if (gfrom == "" || gto == "" || message == "") {
      toast('선물상자 내용을 작성해주세요.',
      {
        icon: '🎁'
      });
      return
    }
    setStep(2);
  };
  const handlePrevious = () => { setStep(1); };

  const completeHandler = async () => {
    await fetch(`http://localhost:8080/api/write/${uuidId}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gto,
        message,
        gfrom,
        boxColor,
        ribbonColor,
      })
    });
    setGiftList((old) => [...old, { message, gfrom, gto, boxColor, ribbonColor }]);
    setModalIsOpen(false);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <p style={{marginBottom: "50px"}}>선물상자에 담을 메시지를 작성해주세요</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <label htmlFor="To" style={{margin: "10px", marginRight: "34px", marginTop:"15px", fontSize: "25px"}}>To.</label><br />
          <input
            className="toInput"
            type="text"
            placeholder="받는 사람"
            value={gto}
            onChange={(e) => setTo(e.target.value)}
          />
          </div><br />

          <textarea
            className="messageInput"
            type="text"
            placeholder="메시지를 적어주세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /><br />

<div style={{ display: "flex", justifyContent: "center", marginBottom: "25px"}}>
          <label htmlFor="From" style={{margin: "10px", marginRight: "11px", marginTop:"15px", fontSize: "25px"}}>From.</label><br />
          <input
            className="fromInput"
            type="text"
            placeholder="주는 사람"
            value={gfrom}
            onChange={(e) => setFrom(e.target.value)}
          />
          </div><br />

          <button className="button1" onClick={handleNext}>다음</button>
          <Toaster/>
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
