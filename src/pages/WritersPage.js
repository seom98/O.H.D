import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftBoxIcon from './GiftBoxIcon';
import GiftBoxPopup from './GiftBoxPopup'



export default function WritersPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [giftList, setGiftList] = useState([]);
    

    return (
        <>
            <h1>작성자페이지</h1>

            {giftList.map(({ message, from, to, color, number }) => (
                <div>
                    {/* <p>{from}, {to}</p>
                    <p>{message}</p> */}
                    <GiftBoxIcon color={color} number={number} />
                </div>
            ))
            }


            <button onClick={() => setModalIsOpen(true)}>선물주러 가기</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <GiftBoxPopup setGiftList={setGiftList} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </>
    );
}