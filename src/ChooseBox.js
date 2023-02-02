import React, { useState } from "react";
import ColorButton from "./ColorButton";
import GiftBoxIcon from "./GiftBoxIcon"

// 여기서부터

const INITIAL_VALUE = 'white';

// 여기까지
export default function ChooseBox() {
    // 여기서부터

    const [hand, setHand] = useState(INITIAL_VALUE);

    const handleButtonClick = (nextHand) => {
        setHand(nextHand);
    };


    // 여기까지
    return (
        < div >
            <div>
                <GiftBoxIcon value={hand} />
            </div>
            <div>
                <ColorButton value="r" onClick={handleButtonClick} />
                <ColorButton value="g" onClick={handleButtonClick} />
                <ColorButton value="v" onClick={handleButtonClick} />
                <ColorButton value="w" onClick={handleButtonClick} />
            </div>
            <div>
                <ColorButton value="1" onClick={handleButtonClick} />
                <ColorButton value="2" onClick={handleButtonClick} />
                <ColorButton value="3" onClick={handleButtonClick} />
                <ColorButton value="4" onClick={handleButtonClick} />
            </div>
        </div >
    );
}
