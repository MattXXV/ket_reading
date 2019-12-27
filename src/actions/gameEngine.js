
export const changeGameState = (gameState) => ({
    type: 'GAME_STATE',
    gameState
})

export const toggleHelpScreen = () => ({
    type: 'TOGGLE_HELP_SCREEN'
})

export const resetScenarios = () => ({
    type: 'RESET_SCENARIOS'
})

export const loadScenario = (scenario) => ({
    type: 'LOAD_SCENARIO',
    scenario
})

export const incrementAnimationSequence = () => ({
    type: 'INCREMENT_ANIMATION_SEQUENCE'
})