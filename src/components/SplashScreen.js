import React, {useRef, useEffect}  from 'react';
import { connect } from 'react-redux';
import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import {changeGameState} from '../actions/gameEngine'
// import CSSPlugin from 'gsap/CSSPlugin';

import splash_working_title from '../images/working-title-long.png';


import '../css/SplashScreen.css'

const C = CSSPlugin;

const SplashScreen = (props) => {
    const splashScreen = useRef([]);
    const splashWIlogo = useRef([]);
    const splashKETlogo = useRef([]);
    const splashTitleWindow = useRef([]);
    const splashTitle = useRef([]);

    const animateSplashScreen = () => {
        const myTween = new TimelineLite({pause:true});

        // this.myTween.add( TweenLite.from(this.myTruck, 1, {x:-1200}), 0);
        myTween.add( TweenLite.to(splashTitle.current, 0.5, {autoAlpha:1}), 0.5);
    }

    useEffect(() => {
       TweenLite.set(splashWIlogo.current, {autoAlpha:0});
       TweenLite.set(splashKETlogo.current, {autoAlpha:0});

       TweenLite.set(splashTitle.current, {autoAlpha:0});

        animateSplashScreen();

    })


    return (

    <div className="splash-screen" ref={element => {splashScreen.current[0] = element;}}>
        <div className="splash-wi-logo" ref={element => {splashWIlogo.current[0] = element;}}></div>
        <div className="splash-ket-logo" ref={element => {splashKETlogo.current[0] = element;}}></div>
        <div className="splash-title-window" ref={element => {splashTitleWindow.current[0] = element;}}>
            {/*<div className="splash-truck" ref={div => {*/}
                {/*this.myTruck = div*/}
            {/*}}>*/}
                {/*<ShippingTruck/>*/}
            {/*</div>*/}
            <div className="splash-title" ref={element => {splashTitle.current[0] = element}}>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <img src={splash_working_title} alt="Essential Skills: Language Arts"/>
                    </div>
                </div>
                <div className="row justify-content-center pt-5 ">
                    <div className="col-12 text-right">
                        <button className="splash-play-button" onClick={(e) => {props.dispatch(changeGameState('scenario'))}}>Play</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

function mapStateToProps(state) {
    return {

        gameState: state.gameState,

    };
}

export default connect(mapStateToProps)(SplashScreen);