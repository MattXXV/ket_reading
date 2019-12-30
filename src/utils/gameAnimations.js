import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";

import flowChart1 from '../images/flowchart-full-1.png';
import Scenario from '../utils/ScenarioClass';
const C = CSSPlugin;

export const firstEntry = (bg, character) => {
    TweenLite.set(character, {className:"character-wrap walking"})
    TweenLite.to(character, 2.5 , {top: 235})
    TweenLite.set(character, {delay: 2.5, className:"character-wrap"})
}

export const downLeft = (bg, character) => {

}

export const characterPosition = ( character, direction = 'facedown', delay = 0) => {
    delay = delay * 1000;
    if(direction === 'faceleft') {
        setTimeout(() => {
            TweenLite.set(character,  {className:"character-wrap faceleft"})
            TweenLite.set(character, {delay: .2, className:"character-wrap faceleft walking"})
        }, delay)
    }
    if(direction === 'faceright') {
     setTimeout(() => {
         TweenLite.set(character,   {className:"character-wrap faceright"})
         TweenLite.set(character,  {delay: .2, className:"character-wrap faceright walking"})
     }, delay)
    }
    if(direction === 'faceup') {
       setTimeout(() => {
           TweenLite.set(character, {className:"character-wrap faceup"})
           TweenLite.set(character,  {delay: .2, className:"character-wrap faceup walking"})
       }, delay)
    }
    if(direction === 'facedown') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap walking"})
        }, delay)
    }
}


export const characterStop = (character, delay ,direction = "down") => {
    delay = delay * 1000;
    if(direction === 'left') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap faceleft"})
        }, delay)

    } else if (direction === 'down') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap"})
        }, delay)
    } else if (direction === 'up') {
        setTimeout(() => {
            TweenLite.set(character, {className: "character-wrap faceup"})
        }, delay)
    } else if (direction === 'right') {
       setTimeout(() => {
           TweenLite.set(character, {className: "character-wrap faceright"})
       }, delay)
    }
}
