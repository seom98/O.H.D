import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftBoxPopup from './GiftBoxPopup'

export default function WritersPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [giftList, setGiftList] = useState([]);
    return (
        <>
            <h1>작성자페이지</h1>

            {giftList.map(({ message, from, to }) => (
                <div>
                    <p>{from}, {to}</p>
                    <p>{message}</p>
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