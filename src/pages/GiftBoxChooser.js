import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const GiftBoxChooser = ({ setRibbonColor, setBoxColor }) => {
    const [selectedBoxColor, setSelectedBoxColor] = useState(null);
    const [selectedRibbonColor, setSelectedRibbonColor] = useState(null);

    const boxColors = ['r', 'g', 'b', 'w'];
    const ribbonColors = [1, 2, 3, 4];

    const handleColorClick = boxColor => {
        setSelectedBoxColor(boxColor);
        setBoxColor(boxColor)
    };

    const handleNumberClick = ribbonColor => {
        setSelectedRibbonColor(ribbonColor);
        setRibbonColor(ribbonColor)
    };

    const buttonStyle = {
        width: '70px',
        height: '70px',
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '',
    };

    return (
        <div>
            {selectedBoxColor && selectedRibbonColor ? (
                <div><GiftBoxIcon boxColor={selectedBoxColor} ribbonColor={selectedRibbonColor}  width="150px" height="150px"/></div>
            ) :
                <div><GiftBoxIcon BoxColor='r' ribbonColor={1}  width="150px" height="150px"/></div>
            }

            <div>
                {boxColors.map(BoxColor => (
                    <button style={buttonStyle} key={BoxColor} onClick={() => handleColorClick(BoxColor)}>
                    {BoxColor}
                    </button>
                ))}
            </div>

            <div>
                {ribbonColors.map(ribbonColor => (
                    <button style={buttonStyle} key={ribbonColor} onClick={() => handleNumberClick(ribbonColor)}>
                    {ribbonColor}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default GiftBoxChooser;
