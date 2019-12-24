import React from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import './css/globals.css';
import SplashScreen from './components/SplashScreen';
import ScenarioIntro from './components/ScenarioIntro';
import Background from './components/Background';
import OptionsBar from './components/OptionsBar';
import HelpScreen from './components/HelpScreen';
import GameInteraction from './components/GameInteraction';



function App(props) {
  return (
        <div className="App">
            <Background/>
            {props.gameState === 'splash' && <SplashScreen dispatch={props.dispatch}/>}
            {props.gameState === 'scenario' && props.showHelpScreen === false && <ScenarioIntro/>}
            {props.gameState === 'game' && <GameInteraction/>}
            {props.showHelpScreen === true && <HelpScreen/>}
            {props.gameState !== 'splash' && <OptionsBar/>}

        </div>
  );
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        showHelpScreen: state.showHelpScreen
        // showHelp: state.showHelp,
        // showMap: state.showMap,
        // showCalc: state.showCalc,
        // mapStep: state.mapStep
    };
}

export default connect(mapStateToProps)(App);
