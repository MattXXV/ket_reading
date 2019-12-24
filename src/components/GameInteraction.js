import React, {useRef, useState, useEffect} from 'react'
import connect from "react-redux/es/connect/connect";
// import {animateBG} from '../utils/gameAnimations';
import Scenario from '../utils/ScenarioClass';
import '../css/GameInteraction.css';
import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import flowChart1 from '../images/flowchart-full-1.png';

import InteractionBox from './InteractionBox';

const C = CSSPlugin;

const GameInteraction = (props) => {

    // setting component organic states
    const [responseMenu, setResponseMenu] = useState(false);
    // defining our animated assets
    const responseWrap = useRef([]);
    const gameChart = useRef([]);


    // Setting game scenario number 1 -4
    const loadScenario = () => {
        const scenario = new Scenario(1, gameChart.current[0], null, props )
        scenario.animateChart(props.animationSequenceNumber);
        // scenario.pickScenario()

    }
    // scenario.pickScenario(1);
    // Toggles custom response menu on right side of screen
    const toggleCustomerResponse = () => {
        if(responseMenu === false) {
            TweenLite.to(responseWrap.current, 0.75, {right: 0});
            setResponseMenu(true)
        } else {
            TweenLite.to(responseWrap.current, 0.75, {right: -299});
            setResponseMenu(false)
        }
    }

    useEffect(() => {
        // animateBG(gameChart.current[0]);
        loadScenario()
    }, [])
    return (
        <div className="game-interaction-wrap">
            <div className="game-scenario-bg" ref={element => {gameChart.current[0] = element;}}>
                <img src={flowChart1}/>
            </div>

            <div className="customer-response-wrapper" ref={element => {responseWrap.current[0] = element;}}>
                <button className="customer-response-button" onClick={toggleCustomerResponse}></button>
                <div className="response-text">
                    <h3>Customer Response</h3>
                    <p>
                        Customer states that they are not able to connect to the internet.
                    </p>
                </div>
            </div>

            <InteractionBox/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState
    };
}

export default connect(mapStateToProps)(GameInteraction);