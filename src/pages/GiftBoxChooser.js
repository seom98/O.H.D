import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const GiftBoxChooser = ({ setRibbonColor, setBoxColor }) => {
    const [selectedBoxColor, setSelectedBoxColor] = useState("r");
    const [selectedRibbonColor, setSelectedRibbonColor] = useState(1);

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
            <p>선물의 상자색과 리본색을 정해주세요</p>

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

            <div>상자색상</div>
            <div>
                {boxColors.map((boxColor, index) => (
                    <button style={{
                        ...buttonStyle, backgroundColor: boxColorName[index],
                        border: selectedBoxColor === boxColor ? '4px solid #422629' : '4px solid #EAD0D3'
                    }}
                        key={boxColor} defaultValue={"r"} onClick={() => handleColorClick(boxColor)}>
                    </button>
                ))}
            </div>
            <div style={{ marginTop: "50px" }}>리본색상</div>
            <div style={{ marginBottom: "53px" }}>
                {ribbonColors.map((ribbonColor, index) => (
                    <button style={{
                        ...buttonStyle, backgroundColor: ribbonColorName[index],
                        border: selectedRibbonColor === ribbonColor ? '4px solid #422629' : '4px solid #EAD0D3'
                    }}
                        key={ribbonColor} defaultValue={1} onClick={() => handleNumberClick(ribbonColor)}>
                    </button>
                ))}
            </div>

        </div>
    )
};

export default GiftBoxChooser;
