import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const GiftBoxChooser = () => {
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
            {selectedColor && selectedNumber ? (
                <div><GiftBoxIcon color={selectedColor} number={selectedNumber} /></div>
            ) :
                <div><GiftBoxIcon color='red' number={1} /></div>
            }

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
            
        </div>
    );
};

export default GiftBoxChooser;
