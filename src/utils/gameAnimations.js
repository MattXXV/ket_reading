import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import flowChart1 from '../images/flowchart-full-1.png';

const C = CSSPlugin;

export const animateBG = (bg) => {
    TweenLite.to(bg, 0.75, {delay: 1, top: 215});
}


const animate