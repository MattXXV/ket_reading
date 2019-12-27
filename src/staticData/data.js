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
    rightStart: [-1133],
    sequenceOne: [34, -1133],
    sequenceTwo: [-200, -1133],
    sequenceThree: [-207, -499],
    sequenceFour: [-207, 154],
    sequenceFive: [-359, -1133],
    sequenceSix: [-494, -495],
    firstRowTopStand: [-200],
    firstRowWalk: [-236],
    firstRowLeftOne: [-499],
    firstRowLeftTwo: [154],
    firstRowReturnTop: [-359],
    secondRowTopStand: [-441],
    secondRowLeftOne: [-499],
    secondRowLeftTwo: [154],
    secondRowWalk: [-489],
    secondRowReturnTop: [-606],
    thirdRowTopStand: [-694],

    endLeft1:[492],
    endTop1:[-1080],
    endLeft2:[-1133],
    endTop2:[-1175],

    finishTop1:[-1211],
    finishLeft1:[-628],
    finishTop2:[-1408],

}]

export const firstStep = {
    top: 34
}
export const secondStep = {
    top: -200
}

export const rowOne = {
    topStand: -200,
    topWalk: -236,
    topNextRow: -359,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}

export const rowTwo = {
    topStand: -441,
    topWalk: -481,
    topNextRow: -606,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}

export const rowThree = {
    topStand: -689,
    topWalk: -731,
    topNextRow: -606,
    leftStart: -1133,
    leftOne: -499,
    leftTwo: 154
}

export const scenarioOneEndRoute = {
    endLeft1:[492],
    endTop1:[-1080],
    endLeft2:[-1133],
    endTop2:[-1175],

    finishTop1:[-1211],
    finishLeft1:[-628],
    finishTop2:[-1408]
}

export const scenarioTwoEndRoute = {
    endTop1:[-936],
    endTop2:[-1169],
    endTop3:[-1409]
}

export const scenarioThreeEndRoute = {
    endLeft1:[492],
    endTop1:[-1080],
    endLeft2:[-1133],
    endTop2:[-1175],

    finishTop1:[-1211],
    finishLeft1:[-628],
    finishTop2:[-1408]
}