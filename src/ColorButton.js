import GiftBoxIcon from './GiftBoxIcon';

function ColorButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <GiftBoxIcon value={value} />
    </button>
  );
}

export default ColorButton;