import React from "react";
import '../css/OptionsBar.css'
import connect from "react-redux/es/connect/connect";
import {toggleHelpScreen} from '../actions/gameEngine';


const OptionsBar = ({dispatch}) => {

    return (
        <div className="app-ui-button-box">
            <button className="app-ui-map-button"></button>
            <button className="app-ui-help-button" onClick={(e) => {dispatch(toggleHelpScreen())}}></button>

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

export default connect(mapStateToProps)(OptionsBar);