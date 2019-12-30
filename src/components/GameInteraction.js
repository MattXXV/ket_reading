import React, {useRef, useState, useEffect} from 'react'
import connect from "react-redux/es/connect/connect";
// import {scenario} from '../utils/gameAnimations';
import Scenario from '../utils/ScenarioClass';
import '../css/GameInteraction.css';
import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import {setUserFeedback, setIsCorrect, showQuestionBox, incrementAnimationSequence} from "../actions/gameEngine";
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
    // const [showQuestion, setShowQuestion] = useState(false);
    // const [showFeedback, setShowFeedback] = useState(false);
    // defining our animated assets
    const responseWrap = useRef([]);
    const gameChart = useRef([]);
    const char = useRef([]);


    // Setting game scenario number 1 -4
    const loadScenario = () => {
        scenario = new Scenario(1, gameChart.current[0], char.current[0], props );
        // scenario.animateChart(props.animationSequenceNumber);
        scenario.pickScenario();
        scenario.loadQuestion();
        firstEntry(gameChart.current[0], char.current[0]);
        // scenario.animateChart(props.animationSequenceNumber);
    }

    const animateBG = () => {
        scenario = new Scenario(4, gameChart.current[0], char.current[0], props );
        scenario.loadQuestion();
        scenario.animateChart(props.animationSequenceNumber);
        // props.dispatch(showQuestionBox(true))

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

    const loadNextQuestion = () => {
        scenario = new Scenario(1, gameChart.current[0], null, props );

    }


    useEffect(() => {
        // animateBG(gameChart.current[0]);
        loadScenario();
    }, [])

    useEffect(() => {
        loadNextQuestion();
    }, [props.animationSequenceNumber])
    return (
        <div className="game-interaction-wrap">
            <div className="game-scenario-bg" ref={element => {gameChart.current[0] = element;}}>
                {props.currentScenario === 1 && <img src={flowChart1} alt="Scenario background."/>}
                {props.currentScenario === 2 && <img src={flowChart2} alt="Scenario background."/>}
                {props.currentScenario === 3 && <img src={flowChart3} alt="Scenario background."/>}
                {props.currentScenario === 4 && <img src={flowChart4} alt="Scenario background."/>}

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
            {props.showQuestion === true  &&
            <InteractionBox animate={animateBG}


            />
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState,
        currentScenario: state.currentScenario,
        currentAnswerChoices: state.currentAnswerChoices,
        showQuestion: state.showQuestion,
        showFeedback: state.showFeedback,
        animationSequenceNumber: state.animationSequenceNumber
    };
}

export default connect(mapStateToProps)(GameInteraction);