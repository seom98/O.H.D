import React, {useState, useEffect} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import GiftBoxIcon from "./GiftBoxIcon";


export default function RoomPage() {
    const url = `http://localhost:3000/writers/`; // url 복사
    const [giftList, setGiftList] = useState([]);
    // const [room ,setRoom] = useState()

    //여기서 페이지가 화면에 보이면 요청보냄
    useEffect(() => { 

        (async () => {
            const response = await fetch ('http://localhost:8080/api')

            const data = await response.json()

            setGiftList(data)

        })()        
    },[])


    //   useEffect(() => { 

    //     (async () => {
    //         const response = await fetch ('http://localhost:8080/api/roomdata')

    //         const data = await response.json()

    //         setRoom(data)

    //     })()


        
    // },[])
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
            <CopyToClipboard text={url}>
                <button>내방 초대하기</button>
            </CopyToClipboard>
        </>
    );
}
