import React from 'react';

import '../css/ChartCharacter.css';
import connect from "react-redux/es/connect/connect";

const ChartCharacter = (props) => {

    return (
        <div className="character">
        </div>
    )
}


function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState
    };
}

export default connect(mapStateToProps)(ChartCharacter);