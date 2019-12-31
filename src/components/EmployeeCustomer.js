import React from 'react';

import employee from '../images/character-with-headset.png';
import employeeSpeechBubble from '../images/character-bubble-02.png';
import customer from '../images/customer.png';
import customerBG from '../images/customer-circle.png';
import customerSpeechBubble from '../images/customer-bubble-02.png';

import '../css/EmployeeCustomer.css';
import connect from "react-redux/es/connect/connect";

const EmployeeCustomer = (props) => {
    return (
        <div className="big-character-wrap">
            <div className="employee-wrap">
                <div className="employee-image">
                    <img className="talking" src={employee} alt="Employee."/>
                    <img className="standing" src={employee} alt="Employee."/>
                </div>
                <div className="employee-speech-bubble">
                    <img src={employeeSpeechBubble} alt="Employee Speech Bubble."/>
                    <p className="employee-response response-text">{props.employeeResponse}</p>
                </div>
            </div>

            <div className="customer-wrap">
                <div className="customer-background">
                    <img src={customerBG} alt="Customer Background."/>
                </div>

                <div className="customer-image">
                    <img src={customer} alt="Customer."/>
                </div>

                <div className="customer-speech-bubble">
                    <img src={customerSpeechBubble} alt="Customer Speech Bubble."/>
                    <p className="customer-response response-text">{props.customerResponse}</p>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        gameState: state.gameState,
        currentScenario: state.currentScenario,
        currentAnswerChoices: state.currentAnswerChoices,
        showQuestion: state.showQuestion,
        showFeedback: state.showFeedback,
        animationSequenceNumber: state.animationSequenceNumber,
        employeeResponse: state.employeeResponse,
        customerResponse: state.customerResponse,

    };
}

export default connect(mapStateToProps)(EmployeeCustomer);