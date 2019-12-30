
const questionData = [{}, {
    sequenceOne: {
        question: 'What is the customer calling about?',
        customerResponse: 'Customer states that they are not able to connect to the internet.',
        answerChoices: ['Internet is not working.', 'Computer is slow.', 'Monitor is not working.'],
        answerFeedback: ['Incorrect.', 'Correct!', 'Incorrect.'],
        value: 1
    },
    sequenceTwo: {
        question: 'Have you turned off your computer and re-started it?',
        customerResponse: 'Client confirms that they did not re-start their computer.',
        answerChoices: ['Yes.', 'No.'],
        answerFeedback: ['Incorrect. The customer indicated that they had not tried restarting their computer. ', 'Correct! The customer indicated that they had not tried restarting their computer.'],
        value: 1
    },
    sequenceThree: {
        question: 'Provide customer with instructions on how to restart their computer.',
        customerResponse: null,
        answerChoices: ['Continue.'],
        answerFeedback: null,
        value: 0
    },
    sequenceFour: {
        question: 'Did that resolve the issue?',
        customerResponse: 'Customer says no, the computer is still slow.',
        answerChoices: ['Yes.', 'No.'],
        answerFeedback: ['Incorrect. The customer says that their computer is still slow.', 'Correct! The customer says that their computer is still slow.'],
        value: 1
    },
    sequenceFive: {
        question: 'Have you run an anti-virus program to clear out all potential virus threats?',
        customerResponse: 'Customer confirms that they have not run an anti-virus program.',
        answerChoices: ['Yes.', 'No.'],
        answerFeedback: ['Incorrect. The customer says that they have not run an anti-virus program.', 'Correct! The customer says that they have not run an anti-virus program.'],
        value: 1
    },
    sequenceSix: {
        question: 'Provide customer with instructions on how to run their anti-virus program.',
        customerResponse: null,
        answerChoices: ['Continue.'],
        answerFeedback: null,
        value: 0
    },
    sequenceSeven: {
        question: 'Did that resolve the issue?',
        customerResponse: 'Customer says yes, the computer is much faster now.',
        answerChoices: ['Yes.', 'No.'],
        answerFeedback: ['Correct!. The customer says that their computer is much faster.', 'Incorrect. The customer says that their computer is much faster.'],
        value: 0
    },
    sequenceEight: {
        question: 'What should Jake do next?',
        customerResponse: null,
        answerChoices: ['Close the ticket and end the call with the customer.', 'Send the ticket to a Level 2 Technician.', 'Set the ticket to a low priority.'],
        answerFeedback: ['Correct!. The issue has been resolved.', 'Incorrect. The issue has been resolved and the ticket should be closed.', 'Incorrect. The issue has been resolved and the ticket should be closed.'],
        value: 0
    },
}]


const questionDataReducer = (state = questionData, action) => {

}