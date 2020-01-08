import { TweenLite } from "gsap/all";
import {setEmployeeConversation} from '../actions/gameEngine';



export const characterPosition = ( character, direction = 'facedown', delay = 0) => {
    delay = delay * 1000;
    if(direction === 'faceleft') {
        setTimeout(() => {
            TweenLite.set(character,  {className:"character-wrap faceleft"});
            TweenLite.set(character, {delay: .2, className:"character-wrap faceleft walking"});
        }, delay);
        return
    }
    if(direction === 'faceright') {
     setTimeout(() => {
         TweenLite.set(character,   {className:"character-wrap faceright"});
         TweenLite.set(character,  {delay: .2, className:"character-wrap faceright walking"});
     }, delay);
        return
    }
    if(direction === 'faceup') {
       setTimeout(() => {
           TweenLite.set(character, {className:"character-wrap faceup"});
           TweenLite.set(character,  {delay: .2, className:"character-wrap faceup walking"});
       }, delay);
        return
    }
    if(direction === 'facedown') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap walking"});
        }, delay);
    }
};


export const characterStop = (character, delay ,direction = "down") => {
    delay = delay * 1000;
    if(direction === 'left') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap faceleft"});
        }, delay);
    } else if (direction === 'down') {
        setTimeout(() => {
            TweenLite.set(character, {className:"character-wrap"});
        }, delay);
    } else if (direction === 'up') {
        setTimeout(() => {
            TweenLite.set(character, {className: "character-wrap faceup"});
        }, delay);
    } else if (direction === 'right') {
       setTimeout(() => {
           TweenLite.set(character, {className: "character-wrap faceright"});
       }, delay);
    }
};
const resetEmployeeOpacity = (employeeWrap, employeeStanding, employeeListening) => {

};
const showEmployee = (mainWrap, employeeWrap, customerWrap) => {
    TweenLite.set(mainWrap, {display: 'block'});
    TweenLite.set(customerWrap, {opacity: 0});
    TweenLite.to(mainWrap, 0.75, {opacity: 1});
    TweenLite.to(employeeWrap, 0.75, {opacity: 1});
};

const showEmployeeListening = (mainWrap, employeeListening, customerWrap) => {
    TweenLite.set(mainWrap, {display: 'block'});
    TweenLite.set(customerWrap, {opacity: 1});
    TweenLite.to(mainWrap, 0.75, {opacity: 1});
    TweenLite.to(employeeListening, 0.75, {opacity: 1});
};

const showEmployeeStanding = (mainWrap, employeeStanding) => {
    TweenLite.set(mainWrap, {display: 'block'});
    TweenLite.to(mainWrap, 0.75, {opacity: 1});
    TweenLite.to(employeeStanding, 0.75, {opacity: 1});
};

const showCustomer = (mainWrap, employeeWrap, customerWrap) => {
    TweenLite.set(mainWrap, {display: 'block'});
    TweenLite.to(mainWrap, 0.75, {opacity: 1});
    TweenLite.to(customerWrap, 0.75, {opacity: 1});
};

export const animateEmployeeCustomer = (mainWrap, employeeWrap, customerWrap, who, store, employeeStanding, employeeListening ) => {
    switch(who) {
        case 'both':
            showEmployee(mainWrap, employeeWrap, customerWrap);
            setTimeout(() => {
                showCustomer(mainWrap, employeeWrap, customerWrap);
                store.dispatch(setEmployeeConversation(true));
            }, 1500);
            break;
        case 'employee':
            showEmployee(mainWrap, employeeWrap, customerWrap);
            store.dispatch(setEmployeeConversation(true));
            break;
        case 'customer':
            showCustomer(mainWrap, employeeWrap, customerWrap);
            store.dispatch(setEmployeeConversation(true));
            break;
        case 'employeeStanding':
            showEmployeeStanding(mainWrap, employeeStanding);
            store.dispatch(setEmployeeConversation(true));
            break;
        case 'employeeListening':
            showEmployeeListening(mainWrap, employeeListening, customerWrap);
            store.dispatch(setEmployeeConversation(true));
            break;
        default:
            throw new Error('bad parameter in animateEmployeeCustomer() in gameAnimations.js ');
    }
};