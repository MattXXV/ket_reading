import React, {useRef, useEffect} from 'react';
import connect from "react-redux/es/connect/connect";
// External functions, classes, actions
import { TweenLite} from "gsap/all";
// Images
import miniChart1 from '../images/mini-chart-1.png';
import miniChart2 from '../images/mini-chart-2.png';
import miniChart3 from '../images/mini-chart-3.png';
import miniChart4 from '../images/mini-chart-4.png';
import miniCharacter from '../images/mini-char.png'
// Stylesheet
import '../css/MiniChart.css';


const MiniChart = (props) => {
   // animated assets
    const diamond = useRef([]);
    const rectangle = useRef([]);
    const character = useRef([]);

    // Set's the character position on the mini chart. Chart has 1 - 16 positions. The param spot represent these positions
    const setCharacter = (spot) => {
        switch(spot) {
            case 1:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-1"});
                break;
            case 2:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-2"});
                break;
            case 3:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-3"});
                break;
            case 4:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-4"});
                break;
            case 5:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-5"});
                break;
            case 6:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-6"});
                break;
            case 7:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-7"});
                break;
            case 8:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-8"});
                break;
            case 9:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-9"});
                break;
            case 10:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-10"});
                break;
            case 11:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-11"});
                break;
            case 12:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-12"});
                break;
            case 13:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-13"});
                break;
            case 14:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-14"});
                break;
            case 15:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-15"});
                break;
            case 16:
                TweenLite.set(character.current[0], {className:"mini-char-wrap spot-16"});
                break;
            default:
                throw new Error('Check logic in setCharacter() in Mini Chart component ')
        }
    };

    // Highlights the current position on the minichart where the user is in the game
    const setChart = () => {
        switch(props.animationSequenceNumber) {
            case 0:
                TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-one visible"});
                setCharacter(1);
                break;
            case 1:
                TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-one visible"});
                setCharacter(1);
                break;
            case 2:
                TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-two visible"});
                setCharacter(2);
                break;
            case 3:
                TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-one visible"});
                setCharacter(3);
                break;
            case 4:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-three visible"});
                    setCharacter(4);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-three visible"});
                    setCharacter(6);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-three visible"});
                    setCharacter(6);
                    return
                }
                if(props.currentScenario === 4) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-three visible"});
                    setCharacter(6);
                    return
                }
                break;
            case 5:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0],  {className:"diamond-highlight diamond-two visible"});
                    setCharacter(5);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-four visible"});
                    setCharacter(7);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-five visible"});
                    setCharacter(9);
                    return
                }
                if(props.currentScenario === 4) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-five visible"});
                    setCharacter(9);
                    return
                }
                break;
            case 6:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-three visible"});
                    setCharacter(6);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-four visible"});
                    setCharacter(8);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-five visible"});
                    setCharacter(10);
                    return
                }
                if(props.currentScenario === 4) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-six visible"});
                    setCharacter(12);
                    return
                }
                break;
            case 7:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-four visible"});
                    setCharacter(7);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-five visible"});
                    setCharacter(9);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-six visible"});
                    setCharacter(11);
                    return
                }
                if(props.currentScenario === 4) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-seven visible"});
                    setCharacter(13);
                    return
                }
                break;
            case 8:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-four visible"});
                    setCharacter(8);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-six visible"});
                    setCharacter(12);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {lassName:"diamond-highlight diamond-seven visible"});
                    setCharacter(13);
                    return
                }
                if(props.currentScenario === 4) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-eight visible"});
                    setCharacter(15);
                    return
                }
                break;
            case 9:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-seven visible"});
                    setCharacter(13);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"diamond-highlight diamond-seven visible"});
                    setCharacter(13);
                    return
                }
                if(props.currentScenario === 3) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-seven visible"});
                    setCharacter(14);
                    return
                }
                break;
            case 10:
                if(props.currentScenario === 1) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-seven visible"});
                    setCharacter(14);
                    return
                }
                if(props.currentScenario === 2) {
                    TweenLite.set(rectangle.current[0], {className:"rectangle-highlight rectangle-eight visible"});
                    setCharacter(15);
                    return
                }
                break;
            default:
                throw new Error('Check logic in setChart() in Mini Chart component ');
        }
    };

    useEffect(() => {
        setChart();
    });

    return (
        <div className="chart-wrap">
            <div className="map-cover">
            </div>

            <div className="rectangle-highlight" ref={element => {rectangle.current[0] = element}}>
            </div>

            <div className="diamond-highlight" ref={element => {diamond.current[0] = element}}>
            </div>

            <div className="map-container">
                {props.currentScenario === 1 && <img src={miniChart1} alt="chart 1."/>}
                {props.currentScenario === 2 && <img src={miniChart2} alt="chart 2."/>}
                {props.currentScenario === 3 && <img src={miniChart3} alt="chart 3."/>}
                {props.currentScenario === 4 && <img src={miniChart4} alt="chart 4."/>}
            </div>

            <div className="mini-char-wrap spot-1" ref={element => {character.current[0] = element}}>
                <img src={miniCharacter} alt="Mini character." />
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        ...state,
        currentScenario: state.currentScenario,
        animationSequenceNumber: state.animationSequenceNumber
    };
}

export default connect(mapStateToProps)(MiniChart);