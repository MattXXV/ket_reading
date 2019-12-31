// storing all question data for game scenarios


const gameEngineDefault = {
    gameState: 'splash',
    currentScenario: 1,
    showHelpScreen: false,
    gameScenarios: [4],
    playedScenarios: [2,3,1],
    animationSequenceNumber: 0,
    currentQuestion: '',
    currentAnswerChoices: [],
    answerFeedback: [],
    employeeResponse: null,
    customerResponse: null,
    correctValue: 0,
    scenarioSequenceLength: 0,
    employeeConversationComplete: false,
    userSelectedAnswerFeedback: '',
    isCorrect: false,
    showQuestion: false,
    showFeedback: false,
    dataBank: [[], {
        scenario: ['Client calls with the complaint that computer is running slowly', 'Continue'],
        questions:
            [
                'What is the customer calling about?',
                'Have you turned off your computer and re-started it?',
                'Provide customer with instructions on how to restart their computer.',
                'Did that resolve the issue?',
                'Have you run an anti-virus program to clear out all potential virus threats?',
                'Provide customer with instructions on how to run their anti-virus program.',
                'Did that resolve the issue?',
                'What should Jake do next?'
            ],

        customerResponse:
            [
                'Customer states that they are not able to connect to the internet.',
                'Client confirms that they did not re-start their computer.',
                null,
                'Customer says no, the computer is still slow.',
                'Customer confirms that they have not run an anti-virus program.',
                null,
                'Customer says yes, the computer is much faster now.',
                null
            ],
        answerChoices:
            [
                ['Internet is not working.', 'Computer is slow.', 'Monitor is not working.'],
                ['Yes.', 'No.'],
                ['Continue.'],
                ['Yes.', 'No.'],
                ['Yes.', 'No.'],
                ['Continue.'],
                ['Yes.', 'No.'],
                ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.']
            ],
        answerFeedback:
            [
                ['Incorrect.', 'Correct!', 'Incorrect.'],
                ['Incorrect. The customer indicated that they had not tried restarting their computer. ', 'Correct! The customer indicated that they had not tried restarting their computer.'],
                [null],
                ['Incorrect. The customer says that their computer is still slow.', 'Correct! The customer says that their computer is still slow.'],
                ['Incorrect. The customer says that they have not run an anti-virus program.', 'Correct! The customer says that they have not run an anti-virus program.'],
                [null],
                ['Correct!. The customer says that their computer is much faster.', 'Incorrect. The customer says that their computer is much faster.'],
                ['Correct!. The issue has been resolved.', 'Incorrect. The issue has been resolved and the ticket should be closed.', 'Incorrect. The issue has been resolved and the ticket should be closed.']
            ],
        answerKey:
            [1,1,0,1,1,0,0,0]

    },
        {
            scenario: ['Client calls with the complaint that their computer won’t start.', 'Continue'],
            questions:
                [
                    'What is the customer calling about?',
                    'Is the power button on? ',
                    'Is your power cord plugged in tightly at computer and power source? ',
                    'Instruct the customer to tighten all of the power cords.',
                    'Did that resolve the issue?',
                    'Is the power source on the wall or power outlet turned on?',
                    'What is the customer’s priority level for this issue?',
                    'What should Jake do next?'
                ],

            customerResponse:
                [
                    'Customer states that their computer won’t start.',
                    'Client confirms that power button is turned on',
                    'Client confirms that power cord was loose.',
                    null,
                    'Customer says no, the computer still does not turn on.',
                    'Customer confirms that power source is turned on.',
                    'Customer confirms that this is high priority.',
                    null
                ],
            answerChoices:
                [
                    ['The computer won’t turn on.', 'Computer is slow.', 'Monitor is not working.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Continue.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Issue is an annoyance.', 'They can live with it.', 'They cannot proceed without a resolution.'],
                    ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.']
                ],
            answerFeedback:
                [
                    ['Correct!', 'Incorrect.', 'Incorrect.'],
                    ['Correct! The customer indicated that power button is on.', 'Incorrect. The customer indicated that power button is on.'],
                    ['Incorrect. The customer said the power cord was loose.', 'Correct! The customer said the power cord was loose.'],
                    [null],
                    ['Incorrect. The customer says that the computer still does not turn on.', 'Correct! The customer says that the computer still does not turn on.'],
                    ['Correct! The customer says that the power is on.', 'Incorrect. The customer says that the power is on.'],
                    ['Incorrect. The customer said that it is a high priority.', 'Incorrect. The customer said that it is a high priority.', 'Correct! The customer said that it is a high priority.'],
                    ['Incorrect. The issue is not resolved so you should not close the ticket.', 'Correct! Unresolved high priorities should be escalated to a level 2 technician.', 'Incorrect. The customer indicated that this is a high priority.']
                ],
            answerKey:
                [0,0,1,0,1,0,2,1]
        },

        {
            scenario: ['Client calls with the complaint that there is no display on their monitor.', 'Continue'],
            questions:
                [
                    'What is the customer calling about?',
                    'Is the monitor turned on?  ',
                    'Is the cord plugged in tightly to both the monitor and the computer? ',
                    'Is your computer on and awake?',
                    'Instruct the customer on how to wake the computer up.',
                    'Did that resolve the issue?',
                    'What should Jake do next?'
                ],

            customerResponse:
                [
                    'Customer states that their monitor is not working.',
                    'Customer confirms that monitor is turned on.',
                    'Customer confirms that the cord is plugged in tightly in both places.',
                    'Customer confirms that the computer is on but is not sure if it is in sleep mode.',
                    null,
                    'Customer says yes, the monitor is working.',
                    null,
                ],
            answerChoices:
                [
                    ['Internet is not working.', 'Computer is slow.', 'Monitor is not working.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Continue'],
                    ['Yes.', 'No.'],
                    ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.']
                ],
            answerFeedback:
                [
                    ['Incorrect.', 'Incorrect.', 'Correct!'],
                    ['Correct! The customer indicated that the monitor is on.', 'Incorrect. The customer indicated that the monitor is on.'],
                    ['Correct! The customer said that the cord is plugged in tightly in both places.', 'Incorrect. The customer said that the cord is plugged in tightly in both places.'],
                    ['Incorrect. The customer said they were not sure.', 'Correct! The customer said they were not sure.'],
                    [null],
                    ['Correct! The customer says that the monitor is working.', 'Incorrect. The customer says that the monitor is working.'],
                    ['Correct! The issue has been resolved.', 'Incorrect. The issue has been resolved and the ticket should be closed.', 'Incorrect. The issue has been resolved and the ticket should be closed.']
                ],
            answerKey:
                [2,0,0,1,0,0,0]
        },
        {
            scenario: ['Client calls with the complaint that they cannot connect to the wireless Internet.', 'Continue'],
            questions:
                [
                    'What is the customer calling about?',
                    'Is Wi-Fi access turned on at computer? ',
                    'Is the router turned on and cables connected?',
                    'Are there networks available?',
                    'What is the customer’s priority level for this issue?',
                    'What should Jake do next?'
                ],

            customerResponse:
                [
                    'Customer states that they are not able to connect to the internet.',
                    'Customer confirms that Wi-Fi is turned on at computer.',
                    'Customer confirms that the router is on and that it is connected to the modem.',
                    'Customer confirms that there is a list of available networks.',
                    'Customer confirms that this is high priority',
                    null,
                ],
            answerChoices:
                [
                    ['Internet is not working.', 'Computer is slow.', 'Monitor is not working.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Yes.', 'No.'],
                    ['Issue is an annoyance.', 'They can live with it.', 'They cannot proceed without a resolution.'],
                    ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.']
                ],
            answerFeedback:
                [
                    ['Correct!', 'Incorrect.', 'Incorrect.'],
                    ['Correct! The customer indicated that Wi-Fi is turned on at computer.', 'The customer indicated that Wi-Fi is turned on at computer.'],
                    ['Correct! The customer said that the router is on and that it is connected to the modem.', 'Incorrect. The customer said that the router is on and that it is connected to the modem.'],
                    ['Correct. The customer said there is a list of available networks.', 'Incorrect. The customer said there is a list of available networks.'],
                    ['Incorrect. The customer said that it is a high priority.', 'Incorrect. The customer said that it is a high priority.', 'Correct! The customer said that it is a high priority.'],
                    ['Incorrect. The issue is not resolved so you should not close the ticket.', 'Correct! Unresolved high priorities should be escalated to a level 2 technician.', 'Incorrect. The customer indicated that this is a high priority.']
                ],
            answerKey:
                [0,0,0,0,2,1]
        }
    ]

}
const gameEngineReducer = (state = gameEngineDefault, action) => {
    switch(action.type) {
        case 'GAME_STATE':
            console.log('change game state')
            return {
                ...state,
                gameState: action.gameState
            };
        case 'TOGGLE_HELP_SCREEN':
           return {
               ...state,
               showHelpScreen: !state.showHelpScreen
           };
        // case 'RESET_SCENARIOS':
        //     return {
        //         ...state,
        //         gameScenarios: [1, 2, 3, 4],
        //         playedScenarios: [],
        //         currentQuestion: '',
        //         answerFeedback: [],
        //         currentAnswerChoices: [],
        //         customerResponse: '',
        //         employeeResponse: '',
        //         correctValue: 0,
        //         // currentScenario: null
        //
        //     };
        case 'RESET_SCENARIOS':
            console.log('reset_scenarios')
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
            console.log('load_scenario')
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
        case 'INCREMENT_ANIMATION_SEQUENCE':
            return {
                ...state,
                animationSequenceNumber: state.animationSequenceNumber + 1
            };
        case 'LOAD_CURRENT QUESTION_DATA':
            console.log('load_current_question')
            return {
                ...state,
                currentQuestion: state.dataBank[state.currentScenario].questions[state.animationSequenceNumber],
                currentAnswerChoices: state.dataBank[state.currentScenario].answerChoices[state.animationSequenceNumber],
                answerFeedback: state.dataBank[state.currentScenario].answerFeedback[state.animationSequenceNumber],
                correctValue: state.dataBank[state.currentScenario].answerKey[state.animationSequenceNumber],
                customerResponse: state.dataBank[state.currentScenario].customerResponse[state.animationSequenceNumber],
                employeeResponse: state.dataBank[state.currentScenario].questions[state.animationSequenceNumber],
                // currentQuestion: 'one',
                // currentAnswerChoices: 'two',
                // answerFeedback: 'three',
                // correctValue: 'four'
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



        default:
            return state
    }
}

export default gameEngineReducer