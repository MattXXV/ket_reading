import React from 'react';
// Stylesheet
import '../css/HelpScreen.css';

const HelpScreen = () => {

    return (
        <div className="help-screen">
            <div className="help-cover">
            </div>

            <div className="help-window">
                <h3 className="text-white">HOW TO PLAY</h3>
                <p>Jake is a help desk technician whose job is to triage the calls that come into the call center. He is the first point of contact for clients and his goal with every client call is to gather as much information as possible. </p>
                <br/>
                <p>As Jake moves through the troubleshooting process in the flowchart, the current decision will appear on the screen. Select the correct answer for each decision point.</p>
            </div>
        </div>
    )
};


export default HelpScreen;