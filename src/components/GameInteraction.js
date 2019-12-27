import React, {useRef, useState, useEffect} from 'react'
import connect from "react-redux/es/connect/connect";
// import {scenario} from '../utils/gameAnimations';
import Scenario from '../utils/ScenarioClass';
import '../css/GameInteraction.css';
import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import flowChart1 from '../images/flowchart-full-1.png';
import flowChart2 from '../images/flowchart-full-2.png';
import flowChart3 from '../images/flowchart-full-3.png';
import flowChart4 from '../images/flowchart-full-4.png';
import ChartCharacter from './ChartCharacter';
import InteractionBox from './InteractionBox';

import {firstEntry} from '../utils/gameAnimations'

const C = CSSPlugin;

const GameInteraction = (props) => {

    let scenario;
    // setting component organic states
    const [responseMenu, setResponseMenu] = useState(false);
    // defining our animated assets
    const responseWrap = useRef([]);
    const gameChart = useRef([]);
    const char = useRef([]);


    // Setting game scenario number 1 -4
    const loadScenario = () => {
        scenario = new Scenario(4, gameChart.current[0], null, props );
        // scenario.animateChart(props.animationSequenceNumber);
        scenario.pickScenario();
        // TweenLite.set(char.current[0], {className:"character-wrap walking"})
        // TweenLite.to(char.current[0], 2 , {top: 235})
        // TweenLite.set(char.current[0], {delay: 2, className:"character-wrap"})

        firstEntry(gameChart.current[0], char.current[0])

    }

    const animateBG = () => {
        scenario = new Scenario(4, gameChart.current[0], char.current[0], props );
        scenario.animateChart(props.animationSequenceNumber);
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
                {props.currentScenario === 1 && <img src={flowChart1}/>}
                {props.currentScenario === 2 && <img src={flowChart2}/>}
                {props.currentScenario === 3 && <img src={flowChart3}/>}
                {props.currentScenario === 4 && <img src={flowChart4}/>}

            </div>

            <div className="test-bttn-wrap">
                <button onClick={(e) => {animateBG()}}>Animation test</button>
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

            <div className="character-wrap" ref={element => {char.current[0] = element}}>
                <ChartCharacter/>
            </div>

            <InteractionBox animate={animateBG}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState,
        currentScenario: state.currentScenario
    };
}

export default connect(mapStateToProps)(GameInteraction);