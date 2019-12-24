const scenarios = [{
    scenario: "Client calls with the complaint that their computer won’t start.",
    q1: {
        question: "What is the customer calling about?",
        customerResponse: "Customer states that their computer won’t start.",
        answerChoice: [
            "The computer won’t turn on.",
            "Computer is slow.",
            "Monitor is not working."
        ],
        feedback: [
            "Correct!",
            "Incorrect.",
            "Incorrect"
        ],
        correctChoice: 0
    },
    q2: {
        question: "Is the power button on?",
        customerResponse: "Client confirms that power cord was loose.",
        answerChoice: [
            "Yes.",
            "No."
        ],
        feedback: [
            "Correct! The customer indicated that power button is on.",
            "Incorrect. The customer indicated that power button is on."
        ],
        correctChoice: 0
    },
    action1: "Provide customer with instructions on how to restart their computer.",
    q3: {
        question: "Did that resolve the issue?",
        customerResponse: "Customer says no, the computer is still slow.",
        answerChoice: [
            "Yes.",
            "No."
        ],
        feedback: [
            "Incorrect. The customer says that their computer is still slow.",
            "Correct. The customer says that their computer is still slow."
        ],
        correctChoice: 1
    },
    q4: {
        question: "Have you run an anti-virus program to clear out all potential virus threats?",
        customerResponse: "Customer confirms that they have not run an anti-virus program.",
        answerChoice: [
            "Yes.",
            "No."
        ],
        feedback: [
            "Incorrect. The customer says that they have not run an anti-virus program.",
            "Correct. The customer says that their computer is still slow."
        ],
        correctChoice: 1
    },
    action2: "Provide customer with instructions on how to run their anti-virus program.",
    q5: {
        question: "Did that resolve the issue?",
        customerResponse: "Customer says yes, the computer is much faster now.",
        answerChoice: [
            "Yes.",
            "No."
        ],
        feedback: [
            "Correct! The customer says that their computer is much faster.",
            "Incorrect. The customer says that their computer is much faster."
        ],
        correctChoice: 0
    },
    q6: {
        question: "What should Jake do next?",
        customerResponse: "",
        answerChoice: [
            "Close the ticket and end the call with the customer.",
            "Send the ticket to a Level 2 Technician.",
            "Set the ticket to a low priority."
        ],
        feedback: [
            "Correct! The issue has been resolved",
            "Incorrect. The issue has been resolved and the ticket should be closed.",
            "Incorrect. The issue has been resolved and the ticket should be closed."
        ],
        correctChoice: 0
    },
}]



export const coordinates = [{
    sequenceOne: [45, -1133],
    sequenceTwo: [-207, -1133],
    sequenceThree: [-207, -522],
    sequenceFour: [-207, 134],
    sequenceFive: [-458, -1333],
    sequenceSix: [-458, -522],
    sequenceSeven: [-458, 134],
    sequenceEight: [-1192, -1133],
    sequenceNine: [-1407, -655],
}]

