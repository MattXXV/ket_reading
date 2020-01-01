import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
// External actions, functions, classes
import { TweenLite } from "gsap/all";
import { setIsCorrect, setUserFeedback, showFeedbackBox, showQuestionBox, setEmployeeConversation, toggleButtonLock} from "../actions/gameEngine";
// Stylesheets
import '../css/InteractionBox.css';


const InteractionBox = (props) => {
    const interactionWrap = useRef([]);
    const questionWrap = useRef([]);
    const feedbackWrap = useRef([]);

    const showQuestionText = () => {
        if(props.showQuestion === true) {
            TweenLite.to(feedbackWrap.current, 0.25, {opacity: 0});
            TweenLite.to(interactionWrap.current, 0.5, {opacity: 1});
            TweenLite.to(questionWrap.current, 0.5, {opacity: 1});
        }
    };

    const showFeedbackText = () => {
        if(props.showFeedback === true) {
            TweenLite.set(feedbackWrap.current, {display: 'block'});
            TweenLite.to(questionWrap.current, 0.25, {opacity: 0});
            TweenLite.to(feedbackWrap.current, 0.5, {opacity: 1});
        }
    };

    const checkAnswer = (userAnswerValue) => {
        props.dispatch(setUserFeedback(props.answerFeedback[userAnswerValue]));

        if(userAnswerValue === props.correctValue) {
            props.dispatch(setIsCorrect(true));
            if(props.currentAnswerChoices.length === 1) {
                props.dispatch(showQuestionBox(false));
                TweenLite.to(interactionWrap.current[0], 0.5, {opacity: 0});
                props.dispatch(showFeedbackBox(false));
                props.animate();
            } else {
                props.dispatch(showFeedbackBox(true));
            }
        } else {
            props.dispatch(setIsCorrect(false));
            props.dispatch(showFeedbackBox(true));
        }
    };

    const tryAgain = () => {
        props.dispatch(showFeedbackBox(false));
        props.dispatch(showQuestionBox(true));
        TweenLite.to(questionWrap.current[0], 0.5, {opacity: 1});
    };

    const continueButton = () => {
        props.dispatch(toggleButtonLock());
        TweenLite.to(props.interactionW.current[0], 0.2, {opacity: 0});
        TweenLite.to(props.employeeW.current[0], 0.2, {opacity: 0});
        TweenLite.to(props.customerW.current[0], 0.2, {opacity: 0});
        props.dispatch(showFeedbackBox(false));
        props.dispatch(showQuestionBox(false));
        props.dispatch(setEmployeeConversation(false));
        props.animate();
    };

    useEffect(() => {
        showFeedbackText();
    }, [props.showFeedback]);

    useEffect(() => {
        showQuestionText();
    }, [props.showQuestion]);

    return (
        <div className="interaction-box" ref={element => {interactionWrap.current[0] = element;}}>

            {props.employeeConversationComplete === true &&
                <div className="question-wrap" ref={element => {questionWrap.current[0] = element;}}>
                    <div className="questionHolder">
                        <p className="question-text">
                            {props.animationSequenceNumber !== 'start' && props.currentQuestion}
                            {props.animationSequenceNumber === 'start' && props.dataBank[props.currentScenario].scenario[0]}

                            </p>
                    </div>

                    {props.currentAnswerChoices !== undefined &&
                    <div className="answers-wrap row">

                        {props.currentAnswerChoices.length === 1 &&
                        <div className="text-center answer-option">
                            <button className="continue-button" onClick={continueButton}>Continue</button>
                        </div>
                        }

                        {props.currentAnswerChoices.length > 1 &&
                        <div className="text-center answer-option">
                            <button id="option1" className="interaction-option-button" value="0" onClick={(e) => {
                                const bttn = document.getElementById('option1');
                                const value = bttn.getAttribute('value');
                                checkAnswer(0)
                            }}>{props.currentAnswerChoices[0]}</button>
                        </div>
                        }

                        {props.currentAnswerChoices.length > 1 &&
                        <div className="text-center answer-option">
                            <button id="option2" className="interaction-option-button" value="1" onClick={(e) => {
                                checkAnswer(1)
                            }}>{props.currentAnswerChoices[1]}
                            </button>
                        </div>
                        }

                        {props.currentAnswerChoices.length > 2 &&
                        <div className="text-center answer-option">
                            <button id="option3" className="interaction-option-button" value="2" onClick={(e) => {
                                checkAnswer(2)
                            }}>{props.currentAnswerChoices[2]}</button>
                        </div>
                        }

                    </div>
                    }
                </div>
            }

            {props.showFeedback === true &&
                <div className="feedback-container row" ref={element => {feedbackWrap.current[0] = element;}}>
                    <div className="correct-feedback">

                        {props.isCorrect !== null && <p> {props.userSelectedAnswerFeedback}</p>}
                        {props.isCorrect === true && <button className="continue-button" onClick={continueButton}>Continue</button>}
                        {props.isCorrect === false && <button className="continue-button try-again" onClick={tryAgain}>Try again</button>}
                    </div>
                </div>
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {

        ...state,
        currentQuestion: state.currentQuestion,
        answerChoices: state.currentAnswerChoices,
        correctValue: state.correctValue,
        isCorrect: state.isCorrect,
        userSelectedAnswerFeedback: state.userSelectedAnswerFeedback,
        showQuestion: state.showQuestion,
        currentScenario: state.currentScenario,
        dataBank: state.dataBank,
        animationSequenceNumber: state.animationSequenceNumber,
        scenarioSequenceLength: state.scenarioSequenceLength,
        employeeConversationComplete: state.employeeConversationComplete,
        lockButtons: state.lockButtons
    };
}

export default connect(mapStateToProps)(InteractionBox);