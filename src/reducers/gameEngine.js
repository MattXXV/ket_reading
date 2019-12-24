const gameEngineDefault = {
    gameState: 'splash',
    currentScenario: 1,
    showHelpScreen: false,
    gameScenarios: [1, 2, 3, 4],
    playedScenarios: [],
    animationSequenceNumber: 0
}
const gameEngineReducer = (state = gameEngineDefault, action) => {
    switch(action.type) {
        case 'GAME_STATE':
            return {
                ...state,
                gameState: action.gameState
            };
        case 'TOGGLE_HELP_SCREEN':
           return {
               ...state,
               showHelpScreen: !state.showHelpScreen
           };
        case 'RESET_SCENARIOS':
            return {
                ...state,
                gameScenarios: [1, 2, 3, 4]
            };
        case 'LOAD_SCENARIO':
            const scenarioBank = state.gameScenarios.filter((item) => {
               return  item !== action.scenario
            })
            // const b = state.currentScenario = action.scenario;
            // const c = state.playedScenarios.concat(action.scenario);
            return {
                ...state,
                gameScenarios: scenarioBank,
                currentScenario: action.scenario,
                playedScenarios:  state.playedScenarios.concat(action.scenario)


            };


        default:
            return state
    }
}

export default gameEngineReducer