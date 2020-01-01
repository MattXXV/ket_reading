import React from 'react';
import connect from "react-redux/es/connect/connect";
// Stylesheet
import '../css/ChartCharacter.css';


const ChartCharacter = (props) => {

    return (
        <div className="character">
        </div>
    )
};


function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState
    };
}

export default connect(mapStateToProps)(ChartCharacter);