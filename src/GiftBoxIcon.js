import GiftBox_0_0 from './assets/GiftBox_0_0.png';
import GiftBox_1_1 from './assets/GiftBox_1_1.png';
import GiftBox_1_2 from './assets/GiftBox_1_2.png';
import GiftBox_1_3 from './assets/GiftBox_1_3.png';
import GiftBox_1_4 from './assets/GiftBox_1_4.png';
import GiftBox_2_1 from './assets/GiftBox_2_1.png';
import GiftBox_2_2 from './assets/GiftBox_2_2.png';
import GiftBox_2_3 from './assets/GiftBox_2_3.png';
import GiftBox_2_4 from './assets/GiftBox_2_4.png';
import GiftBox_3_1 from './assets/GiftBox_3_1.png';
import GiftBox_3_2 from './assets/GiftBox_3_2.png';
import GiftBox_3_3 from './assets/GiftBox_3_3.png';
import GiftBox_3_4 from './assets/GiftBox_3_4.png';
import GiftBox_4_1 from './assets/GiftBox_4_1.png';
import GiftBox_4_2 from './assets/GiftBox_4_2.png';
import GiftBox_4_3 from './assets/GiftBox_4_3.png';
import GiftBox_4_4 from './assets/GiftBox_4_4.png';


const GIFT_IMAGES = {
  whitee: [GiftBox_0_0],
  red: [GiftBox_1_1, GiftBox_1_2, GiftBox_1_3, GiftBox_1_4],
  green: [GiftBox_2_1, GiftBox_2_2, GiftBox_2_3, GiftBox_2_4],
  blue: [GiftBox_3_1, GiftBox_3_2, GiftBox_3_3, GiftBox_3_4],
  white: [GiftBox_4_1, GiftBox_4_2, GiftBox_4_3, GiftBox_4_4],
};

const style = {
  width: '120px',
  height: '120px',
};

function GiftBoxIcon({ color = 'whitee', number = 1 }) {
  const src = GIFT_IMAGES[color][number - 1];
  const alt = `${color} ${number}`;
  return <img src={src} alt={alt} style={style}/>;
}

export default GiftBoxIcon;