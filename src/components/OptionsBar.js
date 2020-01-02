import React from "react";
import connect from "react-redux/es/connect/connect";
// External actions, classes, functions
import {toggleHelpScreen, showMiniChart} from '../actions/gameEngine';
// Stylesheet
import '../css/OptionsBar.css';

const OptionsBar = ({dispatch, gameState}) => {

    return (
        <div className="app-ui-button-box">
            {gameState !== 'game' &&
            <button className="app-ui-map-button viewicon" disabled onClick={(e) => {
                dispatch(showMiniChart())
            }}>
            </button>
            }
            {gameState === 'game' &&
            <button className="app-ui-map-button" onClick={(e) => {
                dispatch(showMiniChart())
            }}>
            </button>
            }
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