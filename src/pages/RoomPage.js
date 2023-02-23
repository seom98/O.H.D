import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GiftBoxIcon from "./GiftBoxIcon";
import { useParams } from "react-router-dom";

function ProgressBar({ value, maxValue }) {
    const percentage = (value / maxValue) * 100;
    return (
        <div style={{ borderRadius: "20px", width: "60%", marginLeft: "70px" , paddingTop: "4px", paddingLeft: "4px", height: "20px", backgroundColor: "#eee" }}>
            <div
                style={{
                    borderRadius: "20px",
                    width: `${percentage}%`,
                    height: "16px",
                    backgroundColor: "#333",
                }}
            />
        </div>
    );
}

export default function RoomPage() {
    const [giftList, setGiftList] = useState([]);
    const [room, setRoom] = useState();
    const uuidId = useParams().uuidId;
    const url1 = `http://localhost:3000/writers/${uuidId}`;
    const url2 = `http://localhost:3000/rooms/${uuidId}`;
    const diffInMs = new Date(room?.dday) - new Date(room?.createdAt);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/api/rooms/${uuidId}`);
            const data = await response.json();
            setGiftList(data.giftList);
            setRoom(data.memberInfo);
        })();
    }, [uuidId]);

    console.log(uuidId, "머야");

    return (
        <>
            <h1>{room?.title}의 방</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{fontSize: "24px"}}>D-{diffInDays}</div>
            <ProgressBar
                value={new Date() - new Date(room?.createdAt)}
                maxValue={new Date(room?.dday) - new Date(room?.createdAt)}/>
            </div>
            <div className='container'>
                <div className='div1'>
                    {giftList.filter((value, index) => index % 3 === 1).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" />
                    ))}
                </div>
                <div className='div2'>
                    {giftList.filter((value, index) => index % 3 === 0).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" />
                    ))}
                </div>
                <div className='div3'>
                    {giftList.filter((value, index) => index % 3 === 2).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" />
                    ))}
                </div>
            </div>
            <CopyToClipboard text={url1}>
                <button className="button1">내방 초대하기</button>
            </CopyToClipboard>
            <CopyToClipboard text={url2}>
                <button className="button1">내방 기억하기</button>
            </CopyToClipboard>
        </>
    );
}
