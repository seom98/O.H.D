import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {useParams} from "react-router";


export default function RoomPage() {
    let {uuidId} = useParams();
    const url = `http://localhost:3000/writers/`; // url 복사

    return (
        <>
            <h1>룸</h1>

            <CopyToClipboard text={url}>
                <button>내방 초대하기</button>
            </CopyToClipboard>
        </>
    );
}
