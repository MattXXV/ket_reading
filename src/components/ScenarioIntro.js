import React from 'react';
import {connect} from 'react-redux'

import blue_dialog_box from '../images/blue-dialog-box.png';
import Scenario from '../utils/ScenarioClass';
import '../css/ScenarioIntro.css';
import {changeGameState} from "../actions/gameEngine";

const ScenarioIntro = (props) => {

    const loadScenario = () => {
        const scenario = new Scenario(null, null, null, props);
        scenario.pickScenario();
        scenario.loadQuestion();
        props.dispatch(changeGameState('game'));
    }

    return (
        <div>
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
            {/*<div className="position-absolute scenario-box-closed">*/}
                {/*<img src={closed_box} alt="Closed delivery box."/>*/}
            {/*</div>*/}
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
        animationSequenceNumber: state.animationSequenceNumber
    };
}

export default connect(mapStateToProps)(ScenarioIntro);