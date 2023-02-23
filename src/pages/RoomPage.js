import React, {useState, useEffect} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import GiftBoxIcon from "./GiftBoxIcon";
import { useParams } from 'react-router-dom';


export default function RoomPage() {
    const [giftList, setGiftList] = useState([]);
    const [room ,setRoom] = useState();
    const uuidId = useParams().uuidId;

    //여기서 페이지가 화면에 보이면 요청보냄

    useEffect(() => { 

        (async () => {
            const response = await fetch (`http://localhost:8080/api/rooms/${uuidId}`)

            const data = await response.json()

            setGiftList(data.giftList)

        })()        
    },[])

    const url1 = `http://localhost:3000/writers/${uuidId}`; // url 복사
    const url2 = `http://localhost:3000/rooms/${uuidId}`; // url 복사


      useEffect(() => {(async () => {
            const response = await fetch (`http://localhost:8080/api/rooms/${uuidId}`)

            const data = await response.json()

            setRoom(data)

        })()


        
    },[]);

    console.log("test :: ", uuidId);
    return (
        <>
            <h1>룸</h1>
            <div className='container'>
                <div className='div1'>
                    {giftList.filter((value, index) => index % 3 === 1).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor}  width="100px" height="100px"/>
                    ))}
                </div>
                <div className='div2'>
                    {giftList.filter((value, index) => index % 3 === 0).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor}  width="100px" height="100px"/>
                    ))}
                </div>
                <div className='div3'>
                    {giftList.filter((value, index) => index % 3 === 2).map(({ boxColor, ribbonColor }) => (
                        <GiftBoxIcon key={boxColor} boxColor={boxColor} ribbonColor={ribbonColor} width="100px" height="100px"/>
                    ))}
                </div>
            </div>
            <CopyToClipboard text={url1}>
                <button>내방 초대하기</button>
            </CopyToClipboard>
            <CopyToClipboard text={url2}>
                <button>내방 기억하기</button>
            </CopyToClipboard>
        </>
    );
}
