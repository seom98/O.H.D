import GiftBox_1_1 from '../assets/GiftBox_1_1.png';
import GiftBox_1_2 from '../assets/GiftBox_1_2.png';
import GiftBox_1_3 from '../assets/GiftBox_1_3.png';
import GiftBox_1_4 from '../assets/GiftBox_1_4.png';
import GiftBox_2_1 from '../assets/GiftBox_2_1.png';
import GiftBox_2_2 from '../assets/GiftBox_2_2.png';
import GiftBox_2_3 from '../assets/GiftBox_2_3.png';
import GiftBox_2_4 from '../assets/GiftBox_2_4.png';
import GiftBox_3_1 from '../assets/GiftBox_3_1.png';
import GiftBox_3_2 from '../assets/GiftBox_3_2.png';
import GiftBox_3_3 from '../assets/GiftBox_3_3.png';
import GiftBox_3_4 from '../assets/GiftBox_3_4.png';
import GiftBox_4_1 from '../assets/GiftBox_4_1.png';
import GiftBox_4_2 from '../assets/GiftBox_4_2.png';
import GiftBox_4_3 from '../assets/GiftBox_4_3.png';
import GiftBox_4_4 from '../assets/GiftBox_4_4.png';

const GIFT_IMAGES = {
    r: [GiftBox_1_1, GiftBox_1_2, GiftBox_1_3, GiftBox_1_4],
    g: [GiftBox_2_1, GiftBox_2_2, GiftBox_2_3, GiftBox_2_4],
    b: [GiftBox_3_1, GiftBox_3_2, GiftBox_3_3, GiftBox_3_4],
    w: [GiftBox_4_1, GiftBox_4_2, GiftBox_4_3, GiftBox_4_4],
};

function GiftBoxIcon({ boxColor = 'r', ribbonColor = 1, width, height }) {
    const src = GIFT_IMAGES[boxColor][ribbonColor - 1];
    const alt = `${boxColor} ${ribbonColor}`;
    const style = { width, height};
    return <img src={src} alt={alt} style={style} />;
}

export default GiftBoxIcon;