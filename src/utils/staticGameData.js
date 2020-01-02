// This file just contains static game data

// first animation coords after character intro walk
export const firstStep = {
    top: -7
}
// second animation chart step after customer calls with complaint
export const secondStep = {
    top: -237
}

// First row chart animation coords
export const rowOne = {
    topStand: -240,
    topWalk: -278,
    topNextRow: -398,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}
// Second row chart animation coords
export const rowTwo = {
    topStand: -491,
    topWalk: -527,
    topNextRow: -646,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}
// Third row chart animation coords
export const rowThree = {
    topStand: -730,
    topWalk: -775,
    topNextRow: -641,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}
// End route coords for scenario 1
export const scenarioOneEndRoute = {
    endLeft1:[492],
    endTop1:[-1122],
    endLeft2:[-1133],
    endTop2:[-1209],

    finishTop1:[-1249],
    finishLeft1:[-628],
    finishTop2:[-1449]
}
// End route coords for scenario 2
export const scenarioTwoEndRoute = {
    endTop1:[-977],
    endTop2:[-1210],
    endTop3:[-1450]
}
// End route coords for scenario 3
export const scenarioThreeEndRoute = {
    endLeft1:[492],
    endTop1:[-1122],
    endLeft2:[-1133],
    endTop2:[-1211],

    finishTop1:[-1246],
    finishLeft1:[-628],
    finishTop2:[-1443]
}


 export const questionData = [[], {
    scenario: 'Client calls with the complaint that computer is running slowly',
    questions:
        [
            null,
            'What is the customer calling about?',
            'Have you turned off your computer and re-started it?',
            'Provide customer with instructions on how to restart their computer.',
            'Did that resolve the issue?',
            'Have you run an anti-virus program to clear out all potential virus threats?',
            'Provide customer with instructions on how to run their anti-virus program.',
            'Did that resolve the issue?',
            'What should Jake do next?',
            null
        ],

    customerResponse:
        [
            'Customer states that their computer is running slowly.',
            null,
            'Client confirms that they did not re-start their computer.',
            null,
            'Customer says no, the computer is still slow.',
            'Customer confirms that they have not run an anti-virus program.',
            null,
            'Customer says yes, the computer is much faster now.',
            null,
            null
        ],
    answerChoices:
        [
            ['Continue.'],
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
            [null],
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
        [0,1,1,0,1,1,0,0,0]

},
    {
        scenario: 'Client calls with the complaint that their computer won’t start.',
        questions:
            [
                null,
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
                null,
                'Client confirms that power button is turned on.',
                'Client confirms that power cord was loose.',
                null,
                'Customer says no, the computer still does not turn on.',
                'Customer confirms that power source is turned on.',
                'Customer confirms that this is high priority.',
                null
            ],
        answerChoices:
            [
                ['Continue.'],
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
                null,
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
            [0,0,0,1,0,1,0,2,1]
    },

    {
        scenario: 'Client calls with the complaint that there is no display on their monitor.',
        questions:
            [
                null,
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
                null,
                'Customer confirms that monitor is turned on.',
                'Customer confirms that the cord is plugged in tightly in both places.',
                'Customer confirms that the computer is on but is not sure if it is in sleep mode.',
                null,
                'Customer says yes, the monitor is working.',
                null,
            ],
        answerChoices:
            [
                ['Continue'],
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
                null,
                ['Incorrect.', 'Incorrect.', 'Correct!'],
                ['Correct! The customer indicated that the monitor is on.', 'Incorrect. The customer indicated that the monitor is on.'],
                ['Correct! The customer said that the cord is plugged in tightly in both places.', 'Incorrect. The customer said that the cord is plugged in tightly in both places.'],
                ['Incorrect. The customer said they were not sure.', 'Correct! The customer said they were not sure.'],
                [null],
                ['Correct! The customer says that the monitor is working.', 'Incorrect. The customer says that the monitor is working.'],
                ['Correct! The issue has been resolved.', 'Incorrect. The issue has been resolved and the ticket should be closed.', 'Incorrect. The issue has been resolved and the ticket should be closed.']
            ],
        answerKey:
            [0,2,0,0,1,0,0,0]
    },
    {
        scenario: 'Client calls with the complaint that they cannot connect to the wireless Internet.',
        questions:
            [
                null,
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
                null,
                'Customer confirms that Wi-Fi is turned on at computer.',
                'Customer confirms that the router is on and that it is connected to the modem.',
                'Customer confirms that there is a list of available networks.',
                'Customer confirms that this is high priority',
                null,
            ],
        answerChoices:
            [
                ['Continue.'],
                ['Internet is not working.', 'Computer is slow.', 'Monitor is not working.'],
                ['Yes.', 'No.'],
                ['Yes.', 'No.'],
                ['Yes.', 'No.'],
                ['Issue is an annoyance.', 'They can live with it.', 'They cannot proceed without a resolution.'],
                ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.']
            ],
        answerFeedback:
            [
                null,
                ['Correct!', 'Incorrect.', 'Incorrect.'],
                ['Correct! The customer indicated that Wi-Fi is turned on at computer.', 'The customer indicated that Wi-Fi is turned on at computer.'],
                ['Correct! The customer said that the router is on and that it is connected to the modem.', 'Incorrect. The customer said that the router is on and that it is connected to the modem.'],
                ['Correct. The customer said there is a list of available networks.', 'Incorrect. The customer said there is a list of available networks.'],
                ['Incorrect. The customer said that it is a high priority.', 'Incorrect. The customer said that it is a high priority.', 'Correct! The customer said that it is a high priority.'],
                ['Incorrect. The issue is not resolved so you should not close the ticket.', 'Correct! Unresolved high priorities should be escalated to a level 2 technician.', 'Incorrect. The customer indicated that this is a high priority.']
            ],
        answerKey:
            [0,0,0,0,0,2,1]
    }
    ];

