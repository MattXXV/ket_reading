import React from 'react';
import connect from "react-redux/es/connect/connect";
// External funcs, actions, classes
import {changeGameState, resetScenarios} from "../actions/gameEngine";
// Images
import employee_end from "../images/character-with-headset.png";
import congratulations from '../images/congratulations.png';
// Stylesheets
import '../css/EndScreen.css';


const EndScreen = ({dispatch, gameScenarios}) => {

    const playAgain = () => {
        if( gameScenarios.length === 0) {
            dispatch(resetScenarios());
            dispatch(changeGameState('scenario'));
        } else {
            dispatch(changeGameState('scenario'));
        }
    };

    return (
        <div className="end-screen-wrapper">
            <div className="end-employee-wrap">
                <div className="employee-image">
                    <img className="talking"  src={employee_end} alt="Employee talking."/>
                </div>
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
    };
}

export default connect(mapStateToProps)(EndScreen);