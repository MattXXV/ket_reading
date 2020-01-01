
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

export const loadCurrentQuestionData = () => ({
    type: 'LOAD_CURRENT QUESTION_DATA'
})

export const setUserFeedback = (feedback) => ({
    type: 'SET_USER_FEEDBACK',
    feedback
})

export const setIsCorrect = (correctFlag) => ({
    type: 'SET_IS_CORRECT',
    correctFlag
})

export const showQuestionBox = (flag) => ({
    type: 'SHOW_QUESTION',
    flag
})

export const showFeedbackBox = (flag) => ({
    type: 'SHOW_FEEDBACK',
    flag
})

export const setScenarioSequenceLength = (sequenceLength) => ({
    type: 'SET_SCENARIO_SEQUENCE_LENGTH',
    sequenceLength
})

export const setEmployeeConversation = (flag) => ({
    type: 'EMPLOYEE_CONVERSATION',
    flag
})

export const showMiniChart = () => ({
    type: 'SHOW_MINICHART',
})

export const resetAnimationNumber = () => ({
    type: 'SET_SCENARIO_SEQUENCE_LENGTH',
})

export const toggleButtonLock = () => ({
    type: 'LOCK_BUTTONS',
})
