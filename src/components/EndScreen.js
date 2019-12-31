import React from 'react';

import congratulations from '../images/congratulations.png';
import connect from "react-redux/es/connect/connect";
import Scenario from '../utils/ScenarioClass';

import '../css/EndScreen.css';
import {changeGameState, resetScenarios} from "../actions/gameEngine";



const EndScreen = (props) => {

    const playAgain = () => {
        if( props.gameScenarios.length === 0) {
            props.dispatch(resetScenarios());
            props.dispatch(changeGameState('scenario'));
        } else {
            props.dispatch(changeGameState('scenario'));
        }

    }

    return (
        <div className="end-screen-wrapper">
            <div className="end-screen-employee">
                {/*<Character />*/}
            </div>
            <div className="end-screen-congratulations">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <img src={congratulations} alt="Congratulations!" />
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <button className="end-screen-continue-button" onClick={playAgain}>Play Again</button>
                    </div>
                </div>
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
        gameScenarios: state.gameScenarios
    };
}

export default connect(mapStateToProps)(EndScreen);