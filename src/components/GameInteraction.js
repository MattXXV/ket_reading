import React, {useRef, useState, useEffect} from 'react'
import connect from "react-redux/es/connect/connect";
// External actions, functions, classes
import { TweenLite} from "gsap/all";
import {toggleButtonLock} from '../actions/gameEngine';
import Scenario from '../utils/ScenarioClass';
// Images
import flowChart1 from '../images/flowchart-full-1.png';
import flowChart2 from '../images/flowchart-full-2.png';
import flowChart3 from '../images/flowchart-full-3.png';
import flowChart4 from '../images/flowchart-full-4.png';
import ChartCharacter from './ChartCharacter';
import InteractionBox from './InteractionBox';
import employee from '../images/character-with-headset.png';
import employee_standing from '../images/jake.png';
import employeeSpeechBubble from '../images/character-bubble-02.png';
import customer from '../images/customer.png';
import customerBG from '../images/customer-circle.png';
import customerSpeechBubble from '../images/customer-bubble-02.png';
// Stylesheets
import '../css/EmployeeCustomer.css';
import '../css/GameInteraction.css';


const GameInteraction = (props) => {

    let scenario;
    // setting component organic states
    const [responseMenu, setResponseMenu] = useState(false);

    // animated assets
    const responseWrap = useRef([]);
    const gameChart = useRef([]);
    const char = useRef([]);
    const interactionWrap = useRef([]);
    const employeeWrap = useRef([]);
    const employeeTalking = useRef([]);
    const employeeStanding = useRef([]);
    const employeeListening = useRef([]);
    const employeeSpeech = useRef([]);
    const customerWrap = useRef([]);

    const loadScenario = () => {
        scenario = new Scenario(null, gameChart.current[0], char.current[0], props );
        scenario.loadQuestion();
        // scenario.entryAnimation();
        //     animateBG();

        setTimeout(() => {
            animateBG();
        }, 600)
    };

    const animateBG = () => {
        console.log('animate bg')
        if(props.scenarioSequenceLength >= props.animationSequenceNumber) {
            scenario = new Scenario(4, gameChart.current[0], char.current[0], props, interactionWrap.current[0], employeeWrap.current[0], customerWrap.current[0], employeeStanding.current[0], employeeListening.current[0]);
            scenario.animateChart(props.animationSequenceNumber);
            setTimeout(() => {
                scenario.loadQuestion();

                if(props.lockButtons === true) {
                    console.log('props=', props.lockButtons);
                    props.dispatch(toggleButtonLock());
                }
            }, 500)
        }
    };

    // Toggles custom response menu on right side of screen
    const toggleCustomerResponse = () => {
        if(responseMenu === false) {
            TweenLite.to(responseWrap.current, 0.75, {right: 0});
            setResponseMenu(true)
        } else {
            TweenLite.to(responseWrap.current, 0.75, {right: -299});
            setResponseMenu(false)
        }
    };

    useEffect(() => {
        loadScenario();
    }, []);


    return (
        <div className="game-interaction-wrap">
            <div className="game-scenario-bg" ref={element => {gameChart.current[0] = element;}}>
                {props.currentScenario === 1 && <img className="chartBg-1" src={flowChart1} alt="Scenario background."/>}
                {props.currentScenario === 2 && <img className="chartBg-2" src={flowChart2} alt="Scenario background."/>}
                {props.currentScenario === 3 && <img className="chartBg-3" src={flowChart3} alt="Scenario background."/>}
                {props.currentScenario === 4 && <img className="chartBg-4" src={flowChart4} alt="Scenario background."/>}
                {/*<img className="chartBg-1" src={flowChart1} alt="Scenario background."/>*/}
                {/*<img className="chartBg-2" src={flowChart2} alt="Scenario background."/>*/}
                {/*<img className="chartBg-3" src={flowChart3} alt="Scenario background."/>*/}
                {/*<img className="chartBg-4" src={flowChart4} alt="Scenario background."/>*/}

            </div>
            <div className="customer-response-wrapper" ref={element => {responseWrap.current[0] = element;}}>
                <button className="customer-response-button" onClick={toggleCustomerResponse}>
                </button>
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
                                <img className="talking"  src={employee} alt="Employee talking." ref={element => {employeeTalking.current[0] = element;}}/>
                            </div>
                            <div className="employee-speech-bubble">
                                <img src={employeeSpeechBubble} alt="Employee Speech Bubble." ref={element => {employeeSpeech.current[0] = element;}}/>
                                <p className="employee-response response-text">{props.employeeResponse}</p>
                            </div>
                        </div>

                        <div className="employee-standing"  ref={element => {employeeStanding.current[0] = element;}}>
                            <img className="standing" src={employee_standing} alt="Employee standing."/>
                        </div>

                        <div className="employee-listening"  ref={element => {employeeListening.current[0] = element;}}>
                            <img className="standing" src={employee} alt="Employee listening."/>
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

            {props.showQuestion === true  &&
                <div className="interaction">
                    <InteractionBox animate={animateBG}
                                    interactionW={interactionWrap}
                                    employeeStanding={employeeStanding}
                                    employeeW={employeeWrap}
                                    employeeSpeech={employeeSpeech}
                                    customerW={customerWrap}
                    />
                </div>
            }
            </div>
        </div>
    )
};

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