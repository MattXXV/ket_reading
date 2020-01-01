import React, {useEffect} from 'react';
import {connect} from 'react-redux'
// External functions, actions, classes
import {changeGameState, resetAnimationNumber} from "../actions/gameEngine";
import Scenario from '../utils/ScenarioClass';
// Image imports
import blue_dialog_box from '../images/blue-dialog-box.png';
import employee_scenario_start from "../images/jake.png";
// Stylesheets
import '../css/ScenarioIntro.css';


const ScenarioIntro = (props) => {

    const loadScenario = () => {
        const scenario = new Scenario(null, null, null, props);
        scenario.pickScenario();
        props.dispatch(changeGameState('game'));
    };

    useEffect(() => {
        props.dispatch(resetAnimationNumber());
    });

    return (
        <div>
            <div className="intro-employee-wrap">
                <div className="employee-image">
                    <img className="talking"  src={employee_scenario_start} alt="Employee talking."/>
                </div>
            </div>

            <div className="position-absolute intro-container">
                <div className="scenario-text-bg">
                    <img src={blue_dialog_box} alt="Blue Dialog Box" />
                </div>

                <div className="position-absolute scenario-position">
                    <h3 className="text-white">TASK</h3>
                    <p className="text-white">Jake is a help desk technician whose job is to triage the calls that come into the call center. He is the first point of contact for clients and his goal with every client call is to gather as much information as possible. Jake follows the steps outlined in the flow chart as well as his reference manual to move each call through troubleshooting. The troubleshooting steps that Jake references are the most basic and simple. This first step in solving client IT issues saves the company time and money so that clients with basic issues are not taking the time of the level 2 technicians. The basic instructions help Jake route issues by either solving the issue, filling out trouble ticket or referring clients to level 2 technicians.</p>
                    <div className="d-flex justify-content-center mt-5 pt-5 continue-wrap">
                        <button className="scenario-continue" onClick={loadScenario}>continue</button>
                    </div>
                </div>
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
        animationSequenceNumber: state.animationSequenceNumber
    };
}

export default connect(mapStateToProps)(ScenarioIntro);