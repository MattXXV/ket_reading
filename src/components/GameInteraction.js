import React, {useRef, useState, useEffect} from 'react'
import connect from "react-redux/es/connect/connect";
// import {scenario} from '../utils/gameAnimations';
import Scenario from '../utils/ScenarioClass';
import '../css/GameInteraction.css';
import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import {
    setUserFeedback,
    setIsCorrect,
    showQuestionBox,
    incrementAnimationSequence,
    changeGameState
} from "../actions/gameEngine";
import flowChart1 from '../images/flowchart-full-1.png';
import flowChart2 from '../images/flowchart-full-2.png';
import flowChart3 from '../images/flowchart-full-3.png';
import flowChart4 from '../images/flowchart-full-4.png';
import ChartCharacter from './ChartCharacter';
import InteractionBox from './InteractionBox';
import EmployeeCustomer from './EmployeeCustomer';


import employee from '../images/character-with-headset.png';
import employeeSpeechBubble from '../images/character-bubble-02.png';
import customer from '../images/customer.png';
import customerBG from '../images/customer-circle.png';
import customerSpeechBubble from '../images/customer-bubble-02.png';
import '../css/EmployeeCustomer.css';

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
    const interactionWrap = useRef([]);
    const employeeWrap = useRef([]);
    const customerWrap = useRef([]);


    // Setting game scenario number 1 -4
    const loadScenario = () => {
        scenario = new Scenario(null, gameChart.current[0], char.current[0], props );
        scenario.entryAnimation();
        // scenario.pickScenario();
        // scenario.loadQuestion();

        // scenario.animateChart(-1);
    }

    const animateBG = () => {
        if(props.scenarioSequenceLength >= props.animationSequenceNumber) {
            scenario = new Scenario(4, gameChart.current[0], char.current[0], props, interactionWrap.current[0], employeeWrap.current[0], customerWrap.current[0]);
            scenario.loadQuestion();
            scenario.animateChart(props.animationSequenceNumber);
        } else {
            props.dispatch(changeGameState('end'));
        }

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
        loadScenario();
    }, [])

    // useEffect(() => {
    //     loadNextQuestion();
    // }, [props.animationSequenceNumber])
    return (
        <div className="game-interaction-wrap">
            <div className="game-scenario-bg" ref={element => {gameChart.current[0] = element;}}>
                {props.currentScenario === 1 && <img src={flowChart1} alt="Scenario background."/>}
                {props.currentScenario === 2 && <img src={flowChart2} alt="Scenario background."/>}
                {props.currentScenario === 3 && <img src={flowChart3} alt="Scenario background."/>}
                {props.currentScenario === 4 && <img src={flowChart4} alt="Scenario background."/>}

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

            <div className="interaction-wrap"  ref={element => {interactionWrap.current[0] = element;}}>
                {/*{props.showQuestion === true  &&*/}
                    <div className="big-character-wrap">
                    <div className="employee-wrap" ref={element => {employeeWrap.current[0] = element;}}>
                    <div className="employee-image">
                    <img src={employee} alt="Employee."/>
                    </div>
                    <div className="employee-speech-bubble">
                    <img src={employeeSpeechBubble} alt="Employee Speech Bubble."/>
                    <p className="employee-response response-text">{props.employeeResponse}</p>
                    </div>
                    </div>

                    <div className="customer-wrap" ref={element => {customerWrap.current[0] = element;}}>
                    <div className="customer-background">
                    <img src={customerBG} alt="Customer Background."/>
                    </div>

                    <div className="customer-image">
                    <img src={customer} alt="Customer."/>
                    </div>

                    <div className="customer-speech-bubble">
                    <img src={customerSpeechBubble} alt="Customer Speech Bubble."/>
                    <p className="customer-response response-text">{props.customerResponse}</p>
                    </div>
                    </div>
                    </div>
                {/*}*/}
            {props.showQuestion === true  &&
            <InteractionBox animate={animateBG} interactionW={interactionWrap} employeeW={employeeWrap} customerW={customerWrap}
            />
            }

            </div>

            <div className="test-bttn-wrap">
                <button onClick={(e) => {animateBG()}}>Animation test</button>
            </div>

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
        animationSequenceNumber: state.animationSequenceNumber,
        employeeResponse: state.employeeResponse,
        customerResponse: state.customerResponse
    };
}

export default connect(mapStateToProps)(GameInteraction);