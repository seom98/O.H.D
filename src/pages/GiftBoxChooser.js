import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const GiftBoxChooser = ({ setRibbonColor, setBoxColor }) => {
    const [selectedBoxColor, setSelectedBoxColor] = useState(null);
    const [selectedRibbonColor, setSelectedRibbonColor] = useState(null);

    const boxColors = ['r', 'g', 'b', 'w'];
    const boxColorName = ['#fc3556', '#35fc71', '#3581fc', '#f2f2f2'];
    const ribbonColors = [1, 2, 3, 4];
    const ribbonColorName = ['#1cfff0', '#f67fff', '#ffea71', '#ff0000'];

    const handleColorClick = boxColor => {
        setSelectedBoxColor(boxColor);
        setBoxColor(boxColor);
    };

    const handleNumberClick = ribbonColor => {
        setSelectedRibbonColor(ribbonColor);
        setRibbonColor(ribbonColor);
    };

    const buttonStyle = {
        width: '70px',
        height: '70px',
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div>
            
            {selectedBoxColor && selectedRibbonColor ? (
                <div><GiftBoxIcon
                    boxColor={selectedBoxColor}
                    ribbonColor={selectedRibbonColor}
                    width="150px" height="150px" />
                </div>
            ) :
                <div><GiftBoxIcon
                    boxColor='r'
                    ribbonColor={1}
                    width="150px" height="150px" />
                </div>
            }

            <div>boxColor</div>
            <div>
                {boxColors.map((boxColor, index) => (
                    <button style={{ ...buttonStyle, backgroundColor: boxColorName[index], border: selectedBoxColor === boxColor ? '5px solid black' : null }}
                        key={boxColor} onClick={() => handleColorClick(boxColor)}>
                    </button>
                ))}
            </div>
            <div style={{ marginTop: "50px" }}>ribbonColor</div>
            <div style={{ marginBottom: "50px" }}>
                {ribbonColors.map((ribbonColor, index) => (
                    <button style={{ ...buttonStyle, backgroundColor: ribbonColorName[index], border: selectedRibbonColor === ribbonColor ? '5px solid black' : null }}
                        key={ribbonColor} onClick={() => handleNumberClick(ribbonColor)}>
                    </button>
                ))}
            </div>

        </div>
    )
};

export default GiftBoxChooser;
