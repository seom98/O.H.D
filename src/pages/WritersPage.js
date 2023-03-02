import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import WritersGiftBoxIcon from './WritersGiftBox';
import GiftBoxPopup from './GiftBoxPopup';
import ProgressBar from './ProgressBar'
import "./Pages.css"


export default function WritersPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [giftList, setGiftList] = useState([]);
    const [room, setRoom] = useState();
    const uuidId = useParams().uuidId;
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
            <h1 className='roomName'><span style={{color: "#734146"}}>{room?.title}</span> 의 방</h1>
            {diffInDays > 0 ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ fontSize: "34px" }}>D-{diffInDays}</div>
                    <ProgressBar
                        value={new Date() - new Date(room?.createdAt)}
                        maxValue={new Date(room?.dday) - new Date(room?.createdAt)} />
                </div>
            ) :
                (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ fontSize: "34px" }}>D+{-diffInDays}</div>
                    </div>
                )}

            <div className='container'>
                <div className='div1'>
                    {giftList.filter((value, index) => index % 3 === 1).map(({ giftId, boxColor, ribbonColor }) => (
                        <WritersGiftBoxIcon
                            key={giftId}
                            giftId={giftId}
                            boxColor={boxColor}
                            ribbonColor={ribbonColor}
                            width="100%"
                            onClick />
                    ))}
                </div>
                <div className='div2'>
                    {giftList.filter((value, index) => index % 3 === 0).map(({ giftId, boxColor, ribbonColor }) => (
                        <WritersGiftBoxIcon
                            key={giftId}
                            giftId={giftId}
                            boxColor={boxColor}
                            ribbonColor={ribbonColor}
                            width="100%"
                            onClick />
                    ))}
                </div>
                <div className='div3'>
                    {giftList.filter((value, index) => index % 3 === 2).map(({ giftId, boxColor, ribbonColor }) => (
                        <WritersGiftBoxIcon
                            key={giftId}
                            giftId={giftId}
                            boxColor={boxColor}
                            ribbonColor={ribbonColor}
                            width="100%"
                            onClick />
                    ))}
                </div>
            </div>



            <Link to="/"><button className='button1'>내 방 만들러 가기</button></Link>
            <button className='button1' onClick={() => setModalIsOpen(true)}>선물주러 가기</button>
            <Modal appElement={document.getElementById('root')}
                isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                    content: {
                        backgroundColor: "#ffeff1",
                        borderRadius: "30px",
                        width: '400px',
                        height: '600px',
                        margin: "auto",
                        position: "fixed",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0"
                    }
                }}>
                <GiftBoxPopup setGiftList={setGiftList} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </>
    );
}