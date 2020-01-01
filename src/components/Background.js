import React from 'react';
import connect from "react-redux/es/connect/connect";
// Images
import splash_bg from '../images/it-bg.jpg';
// Stylesheets
import '../css/Background.css';

const Background = ({gameState}) => {

    return (
        <div>
            <div className="screen-bg">
                {gameState !== 'splash' &&
                <div className="scenario-char-wrap">
                </div>
                }

                {gameState !== 'splash' &&
                <img src={splash_bg} alt="Background"/>
                }
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        gameState: state.gameState
    };
}

export default connect(mapStateToProps)(Background);