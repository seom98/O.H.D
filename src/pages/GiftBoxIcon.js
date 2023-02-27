import GiftBox_1_1 from '../assets/GiftBox_1_1.png';
import GiftBox_1_2 from '../assets/GiftBox_1_2.png';
import GiftBox_1_3 from '../assets/GiftBox_1_3.png';
import GiftBox_1_4 from '../assets/GiftBox_1_4.png';
import GiftBox_2_1 from '../assets/GiftBox_2_1.png';
import GiftBox_2_2 from '../assets/GiftBox_2_2.png';
import GiftBox_2_3 from '../assets/GiftBox_2_3.png';
import GiftBox_2_4 from '../assets/GiftBox_2_4.png';
import GiftBox_3_1 from '../assets/GiftBox_3_1.png';
import GiftBox_3_2 from '../assets/GiftBox_3_2.png';
import GiftBox_3_3 from '../assets/GiftBox_3_3.png';
import GiftBox_3_4 from '../assets/GiftBox_3_4.png';
import GiftBox_4_1 from '../assets/GiftBox_4_1.png';
import GiftBox_4_2 from '../assets/GiftBox_4_2.png';
import GiftBox_4_3 from '../assets/GiftBox_4_3.png';
import GiftBox_4_4 from '../assets/GiftBox_4_4.png';
import axios from 'axios';
import Modal from 'react-modal';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MessagePopup from "./MessagePopup.js"

const GIFT_IMAGES = {
    r: [GiftBox_1_1, GiftBox_1_2, GiftBox_1_3, GiftBox_1_4],
    g: [GiftBox_2_1, GiftBox_2_2, GiftBox_2_3, GiftBox_2_4],
    b: [GiftBox_3_1, GiftBox_3_2, GiftBox_3_3, GiftBox_3_4],
    w: [GiftBox_4_1, GiftBox_4_2, GiftBox_4_3, GiftBox_4_4],
};

const GiftBoxIcon = ({ giftId, boxColor = 'r', ribbonColor = 1, width, height }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const src = GIFT_IMAGES[boxColor][ribbonColor - 1];
    const alt = `${boxColor} ${ribbonColor}`;
    const style = { width, height };

    const [room, setRoom] = useState();
    const uuidId = useParams().uuidId;
    const diffInMs = new Date(room?.dday) - new Date(room?.createdAt);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/api/rooms/${uuidId}`);
            const data = await response.json();
            setRoom(data.memberInfo);
        })();
    }, [uuidId]);

    const updateCompleted = async () => {
        await axios.patch(`http://localhost:8080/api/checked/${giftId}`);
        setModalIsOpen(true);
    };

    return (
        <>
            {diffInDays > 0 ? (
                <div>
                    <img src={src} alt={alt} style={style} onClick={updateCompleted} />
                </div>
            ) :
                <div>
                    <img src={src} alt={alt} style={style} onClick={updateCompleted} />
                    {modalIsOpen && (
                        <div className="popup">
                            <div className="popup-content">
                                <Modal appElement={document.getElementById('root')}
                                    isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                                    style={{
                                        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                                        content: {
                                            width: '250px',
                                            height: '250px',
                                            margin: "auto",
                                            position: "fixed",
                                            top: "0",
                                            bottom: "0",
                                            left: "0",
                                            right: "0"
                                        }
                                    }}>
                                    <button onClick={() => setModalIsOpen(false)}>X</button>
                                    <h2>Gift Box Checked!</h2>
                                    <MessagePopup />
                                </Modal>

                            </div>
                        </div>
                    )}
                </div>}
        </>
    );

};

export default GiftBoxIcon;
