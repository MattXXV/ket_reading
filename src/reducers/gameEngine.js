// storing all question data for game scenarios
import {questionData} from '../utils/staticGameData';

const gameEngineDefault = {
    // Controlling game screen section
    gameState: 'splash',
    // Which scenario is currently loaded 1,2,3 or 4
    currentScenario: null,
    // Show the help screen
    showHelpScreen: false,
    // Available scenarios to play
    gameScenarios: [],
    // Scenarios that have been played
    playedScenarios: [1,2,3,4],
    // Which animation sequence the game is in
    animationSequenceNumber: 0,
    // Current scenario question to load
    currentQuestion: '',
    // User answer choices for current question
    currentAnswerChoices: [],
    // User feedback for current question
    answerFeedback: [],
    // The employees response to the customer for current question
    employeeResponse: null,
    // The customers response to employee for current question
    customerResponse: null,
    // The array position of correct answer for current question ( 0, 1, or 2)
    correctValue: 0,
    // Show the mini chart map screen
    showMiniChart: false,
    // How long is the current scenarios animation sequence
    scenarioSequenceLength: 0,
    // Stores if employee customer conversation is running or completed
    employeeConversationComplete: false,
    // Feedback to show based on users selected answer
    userSelectedAnswerFeedback: '',
    // Was the question answered correct
    isCorrect: false,
    // Show the question interaction assets
    showQuestion: false,
    // Show the feedback
    showFeedback: false,
    // Quick hack to prevent double clicks - not currently used in game 12/29/19
    lockButtons: false,
}

// M.A - If time permits let's clean this up and not return the full state on every action call if not necessary. Makes the program work harder than necessary.
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
                gameScenarios: [1, 2, 3, 4],
                playedScenarios: [],
                currentQuestion: '',
                answerFeedback: [],
                currentAnswerChoices: [],
                customerResponse: '',
                employeeResponse: '',
                correctValue: 0,
                currentScenario: 1

            };
        case 'LOAD_SCENARIO':
            const scenarioBank = state.gameScenarios.filter((item) => {
               return  item !== action.scenario
            });
            return {
                ...state,
                gameScenarios: scenarioBank,
                currentScenario: action.scenario,
                playedScenarios:  state.playedScenarios.concat(action.scenario)
            };
        case 'INCREMENT_ANIMATION_SEQUENCE':
            return {
                ...state,
                animationSequenceNumber: state.animationSequenceNumber + 1
            };
        case 'LOAD_CURRENT QUESTION_DATA':
            return {
                ...state,
                currentQuestion: questionData[state.currentScenario].questions[state.animationSequenceNumber],
                currentAnswerChoices: questionData[state.currentScenario].answerChoices[state.animationSequenceNumber],
                answerFeedback: questionData[state.currentScenario].answerFeedback[state.animationSequenceNumber],
                correctValue: questionData[state.currentScenario].answerKey[state.animationSequenceNumber],
                customerResponse: questionData[state.currentScenario].customerResponse[state.animationSequenceNumber],
                employeeResponse: questionData[state.currentScenario].questions[state.animationSequenceNumber],
            };
        case "SET_USER_FEEDBACK":
            return {
                ...state,
                userSelectedAnswerFeedback: action.feedback
            };
        case "SET_IS_CORRECT":
            return {
                ...state,
                isCorrect: action.correctFlag
            };
        case "SHOW_QUESTION":
            return {
                ...state,
                showQuestion: action.flag
            };
        case "SHOW_MINICHART":
            return {
                ...state,
                showMiniChart: !state.showMiniChart
            };
        case "SHOW_FEEDBACK":
            return {
                ...state,
                showFeedback: action.flag
            };
        case "SET_SCENARIO_SEQUENCE_LENGTH":
            return {
                ...state,
                animationSequenceNumber: 0,
                scenarioSequenceLength: action.sequenceLength
            };
        case "EMPLOYEE_CONVERSATION":
            return {
                ...state,
                employeeConversationComplete: action.flag
            };
        case "RESET_ANIMATION_NUMBER":
            return {
                ...state,
                animationSequenceNumber: 0
            };

        case "LOCK_BUTTONS":
            return {
                ...state,
                lockButtons: !state.lockButtons
            };
        default:
            return state
    }
}

export default gameEngineReducer