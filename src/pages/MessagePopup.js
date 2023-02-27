import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MessagePopup() {
    const [giftList, setGiftList] = useState([]);
    const uuidId = useParams().uuidId;

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/api/rooms/${uuidId}`);
            const data = await response.json();
            setGiftList(data.giftList);
        })();
    }, [uuidId]);

    return (
        <div>
            {giftList.map(({ giftId, message, gfrom, gto }) => (
                <div key={giftId}>
                    <p>From: {gfrom}</p>
                    <p>To: {gto}</p>
                    <p>Message: {message}</p>
                </div>
            ))}
        </div>
    )
}
