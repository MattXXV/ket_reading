import React from "react";
import connect from "react-redux/es/connect/connect";
// External actions, classes, functions
import {toggleHelpScreen, showMiniChart} from '../actions/gameEngine';
// Stylesheet


const OptionsBar = ({dispatch}) => {

    return (
        <div className="app-ui-button-box">
            <button className="app-ui-map-button" onClick={(e) => {dispatch(showMiniChart())}}>
            </button>
            <button className="app-ui-help-button" onClick={(e) => {dispatch(toggleHelpScreen())}}>
            </button>
        </div>
    )
};


function mapStateToProps(state) {
    return {
        gameState: state.gameState,
    };
}

export default connect(mapStateToProps)(OptionsBar);