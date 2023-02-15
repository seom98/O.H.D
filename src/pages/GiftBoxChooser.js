import React, { useState } from 'react';
import GiftBoxIcon from "./GiftBoxIcon"

const GiftBoxChooser = ({setNumber, setColor}) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const colors = ['red', 'green', 'blue', 'white'];
    const numbers = [1, 2, 3, 4];

    const handleColorClick = color => {
        setSelectedColor(color);
        setColor(color)
    };

    const handleNumberClick = number => {
        setSelectedNumber(number);
        setNumber(number)
    };
    const buttonStyle = {
        width: '70px',
        height: '70px',   
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
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
                    <button style={buttonStyle} key={color} onClick={() => handleColorClick(color)}>
                        
                    </button>
                ))}
            </div>

            <div>
                {numbers.map(number => (
                    <button style={buttonStyle} key={number} onClick={() => handleNumberClick(number)}>
                        
                    </button>
                ))}
            </div>
            
        </div>
    );
};

export default GiftBoxChooser;
