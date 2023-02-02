 import React, { useState } from 'react';
 import Modal from 'react-modal';
 import Popup from './Popup'

 export default function WritersPage() {
     const [modalIsOpen, setModalIsOpen] = useState(false);
     return (
         <>
             <h1>작성자페이지</h1>
             <button onClick={() => setModalIsOpen(true)}>선물주러 가기</button>
             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <Popup />
             </Modal>
         </>
     );
 }