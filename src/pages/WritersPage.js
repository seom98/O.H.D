import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import GiftBoxIcon from './GiftBoxIcon';
import GiftBoxPopup from './GiftBoxPopup';
import ProgressBar from './ProgressBar'
import "./Pages.css"



export default function WritersPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [giftList, setGiftList] = useState([]);
    const [room, setRoom] = useState();
    const uuidId = useParams().uuidId;
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
                            {giftList.filter((value, index) => index % 3 === 1).map(({ giftId, boxColor, ribbonColor }) => (
                                <GiftBoxIcon key={giftId} giftId={giftId} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" onClick />
                            ))}
                        </div>
                        <div className='div2'>
                            {giftList.filter((value, index) => index % 3 === 0).map(({ giftId, boxColor, ribbonColor }) => (
                                <GiftBoxIcon key={giftId} giftId={giftId} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" onClick/>
                            ))}
                        </div>
                        <div className='div3'>
                            {giftList.filter((value, index) => index % 3 === 2).map(({ giftId, boxColor, ribbonColor }) => (
                                <GiftBoxIcon key={giftId} giftId={giftId} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px" onClick/>
                            ))}
                        </div>
            </div>

            {/* {giftList.map(({ message, from, to, color, number }) => (
                <div>
                    <p>{from}, {to}</p>
                    <p>{message}</p>
                    <GiftBoxIcon color={color} number={number} />
                </div>
            ))
            } */}

            <button className='button1 bbb' onClick={() => setModalIsOpen(true)}>선물주러 가기</button>
            <Modal appElement={document.getElementById('root')} 
                    isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <GiftBoxPopup setGiftList={setGiftList} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </>
    );
}