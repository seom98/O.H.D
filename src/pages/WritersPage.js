import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftBoxIcon from './GiftBoxIcon';
import GiftBoxPopup from './GiftBoxPopup'
import './WritersPage.css'
import "./Pages.css"



export default function WritersPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [giftList, setGiftList] = useState([]);
    

    return (
        <>
            <h1>작성자페이지</h1>

            <div className='container'>
                <div className='div1'>
                    {giftList.filter((value, index) => index % 3 === 1).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon boxColor={boxColor} ribbonColor={ribbonColor}  width="100px" height="100px"/>
                    ))}
                </div>
                <div className='div2'>
                    {giftList.filter((value, index) => index % 3 === 0).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon boxColor={boxColor} ribbonColor={ribbonColor}  width="100px" height="100px"/>
                    ))}
                </div>
                <div className='div3'>
                    {giftList.filter((value, index) => index % 3 === 2).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px"/>
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


            <button className='button1' onClick={() => setModalIsOpen(true)}>선물주러 가기</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <GiftBoxPopup setGiftList={setGiftList} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </>
    );
}