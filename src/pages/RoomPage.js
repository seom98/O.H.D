import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GiftBoxIcon from "./GiftBoxIcon";
import ProgressBar from './ProgressBar';
import toast from 'react-hot-toast';

const notify = () => toast.success('링크가 클립보드에 복사되었습니다.');


export default function RoomPage() {
    const [giftList, setGiftList] = useState([]);
    const [room, setRoom] = useState();
    const uuidId = useParams().uuidId;
    const url1 = `http://localhost:3000/writers/${uuidId}`;
    const url2 = `http://localhost:3000/rooms/${uuidId}`;
    const diffInMs = new Date(room?.dday) - new Date();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/api/rooms/${uuidId}`);
            const data = await response.json();
            setGiftList(data.giftList);
            setRoom(data.memberInfo);
        })();
    }, [uuidId]);

    return (
        <>
            <h1>{room?.title}의 방</h1>
            {diffInDays > 0 ? (
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ fontSize: "24px" }}>D-{diffInDays}</div>
                        <ProgressBar
                            value={new Date() - new Date(room?.createdAt)}
                            maxValue={new Date(room?.dday) - new Date(room?.createdAt)} />
                    </div>
                    <div className='container'>
                        <div className='div1'>
                            {giftList.filter((value, index) => index % 3 === 1).map(({ boxColor, ribbonColor }) => (
                                <GiftBoxIcon
                                    key={boxColor}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%" />
                            ))}
                        </div>
                        <div className='div2'>
                            {giftList.filter((value, index) => index % 3 === 0).map(({ boxColor, ribbonColor }) => (
                                <GiftBoxIcon
                                    key={boxColor}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%" />
                            ))}
                        </div>
                        <div className='div3'>
                            {giftList.filter((value, index) => index % 3 === 2).map(({ boxColor, ribbonColor }) => (
                                <GiftBoxIcon
                                    key={boxColor}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%" />
                            ))}
                        </div>
                    </div>

                    <CopyToClipboard text={url1}>
                        <button className="button1">내방 초대하기</button>
                    </CopyToClipboard>
                    <CopyToClipboard text={url2}>
                        <button className="button1">내방 기억하기</button>
                    </CopyToClipboard>
                </div>
            ) :
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ fontSize: "24px" }}>D+{-diffInDays}</div>
                    </div>
                    <div className='container'>
                        <div className='div1'>
                            {giftList.filter((value, index) => index % 3 === 1).map(({ giftId, boxColor, ribbonColor, gto, gfrom, message }) => (
                                <GiftBoxIcon
                                    key={giftId}
                                    giftId={giftId}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%"
                                    gto={gto}
                                    gfrom={gfrom}
                                    message={message}
                                />
                            ))}
                        </div>
                        <div className='div2'>
                            {giftList.filter((value, index) => index % 3 === 0).map(({ giftId, boxColor, ribbonColor, gto, gfrom, message }) => (
                                <GiftBoxIcon
                                    key={giftId}
                                    giftId={giftId}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%"
                                    gto={gto}
                                    gfrom={gfrom}
                                    message={message}
                                />
                            ))}
                        </div>
                        <div className='div3'>
                            {giftList.filter((value, index) => index % 3 === 2).map(({ giftId, boxColor, ribbonColor, gto, gfrom, message }) => (
                                <GiftBoxIcon
                                    key={giftId}
                                    giftId={giftId}
                                    boxColor={boxColor}
                                    ribbonColor={ribbonColor}
                                    width="100%"
                                    gto={gto}
                                    gfrom={gfrom}
                                    message={message}
                                />
                            ))}
                        </div>
                    </div>
                    <CopyToClipboard text={url1}>
                        <button className="button1" onClick={notify}>내방 초대하기</button>
                    </CopyToClipboard>
                    <CopyToClipboard text={url2}>
                        <button className="button1" onClick={notify}>내방 기억하기</button>
                    </CopyToClipboard>
                </div>}
        </>
    );
}

