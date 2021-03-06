import React from 'react';
import {connect} from 'react-redux';

import './css/globals.css';
import SplashScreen from './components/SplashScreen';
import ScenarioIntro from './components/ScenarioIntro';
import Background from './components/Background';
import OptionsBar from './components/OptionsBar';
import HelpScreen from './components/HelpScreen';
import EndScreen from './components/EndScreen'
import GameInteraction from './components/GameInteraction';
import MiniChart from './components/MiniChart';
// import EmployeeCustomer from './components/EmployeeCustomer'

console.log = console.warn = console.error = () => {};

function App(props) {
  return (
        <div className="App">
            <Background/>
            {props.gameState === 'splash' && <SplashScreen dispatch={props.dispatch}/>}
            {props.gameState === 'scenario' && props.showHelpScreen === false && <ScenarioIntro/>}
            {props.gameState === 'game' && <GameInteraction/>}
            {props.gameState === 'end' && <EndScreen/>}
            {props.showMiniChart === true && <MiniChart/>}
            {props.showHelpScreen === true && <HelpScreen/>}
            {props.gameState !== 'splash' && <OptionsBar/>}
        </div>
  );
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        showHelpScreen: state.showHelpScreen,
        showMiniChart: state.showMiniChart
    };
}

export default connect(mapStateToProps)(App);
