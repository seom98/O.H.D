import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const ColorChooser = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const colors = ['red', 'green', 'blue', 'white'];
    const numbers = [1, 2, 3, 4];

    const handleColorClick = color => {
        setSelectedColor(color);
    };

    const handleNumberClick = number => {
        setSelectedNumber(number);
    };

    return (
        <div>
            <div>
                {colors.map(color => (
                    <button key={color} onClick={() => handleColorClick(color)}>
                        {color}
                    </button>
                ))}
            </div>
            <div>
                {numbers.map(number => (
                    <button key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                    </button>
                ))}
            </div>
            {selectedColor && selectedNumber ? (
                <div><GiftBoxIcon color={selectedColor} number={selectedNumber} /></div>
            ) :
                <div><GiftBoxIcon color='whitee' number={1} /></div>}
        </div>
    );
};

export default ColorChooser;
