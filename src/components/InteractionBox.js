import React from 'react';
import {connect} from 'react-redux';
import '../css/InteractionBox.css';

const InteractionBox = (props) => {

    return (
        <div className="interaction-box">
            <div className="question-wrap">
                <div className="questionHolder">
                    <p className="question-text"> This is the question </p>
                </div>

                <div className="answers-wrap row">
                    <div className="col-4 text-center">
                        <button className="interaction-option-button" value="0">Option 1</button>
                    </div>
                    <div className="col-4 text-center">
                        <button className="interaction-option-button" value="0">Option 2</button>
                    </div>
                    <div className="col-4 text-center">
                        <button className="interaction-option-button" value="0">Option 3</button>
                    </div>
                </div>
            </div>

            <div className="feedback-container row justify-content-center">
                    <div className="correct-feedback">
                        <p>The correct feedback</p>
                        <button className="continue-button">Continue</button>
                    </div>
                <div className="incorrect-feedback">
                    <p>The incorrect feedback</p>
                    <button className="continue-button">Try again</button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {

        ...state,

    };
}

export default connect(mapStateToProps)(InteractionBox);