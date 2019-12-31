import React from 'react';
import connect from "react-redux/es/connect/connect";

import '../css/Background.css';
import character from '../images/jake.png';

import splash_bg from '../images/it-bg.jpg';

const Background = ({gameState}) => {

    return (
        <div>
            <div className="screen-bg">
                {gameState !== 'splash' &&
                <div className="scenario-char-wrap">
                    {/*<img src={character}/>*/}
                </div>
                }
                {gameState !== 'splash' && <img src={splash_bg}/> }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        // scenarioIndex: state.scenarioIndex,
        // problemIndex: state.problemIndex,
        // correctAnswers: state.correctAnswers,
        gameState: state.gameState,
        // correctCharacters: state.correctCharacters,
        // questionLoad: state.questionLoad,
        // interactionStart: state.interactionStart,
        // open_door_anim: state.open_door_anim
    };
}

export default connect(mapStateToProps)(Background);