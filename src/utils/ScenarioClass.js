import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import {changeGameState, incrementAnimationSequence, loadScenario, resetScenarios, loadCurrentQuestionData, showQuestionBox, setScenarioSequenceLength} from "../actions/gameEngine";
import {firstStep, secondStep, rowOne, rowTwo, rowThree, scenarioOneEndRoute, scenarioTwoEndRoute, scenarioThreeEndRoute} from '../staticData/data';
import {characterPosition, characterStop, firstEntry, animateEmployeeCustomer} from './gameAnimations';

const C = CSSPlugin;

class Scenario  {
    constructor(scenario = undefined, background = undefined, character = undefined, store = {}, interactionWrap, employeeWrap, customerWrap) {
        this.scenario = scenario;
        this.background = background;
        this.character = character;
        this.store = store;
        this.interactionWrap = interactionWrap;
        this.employeeWrap = employeeWrap;
        this.customerWrap = customerWrap;
    }

    pickScenario() {
        const scenarioBank = this.store.gameScenarios.length;
        if(scenarioBank > 0) {
            let index = scenarioBank * Math.random();
            index = Math.floor(index);
            this.store.dispatch(loadScenario(this.store.gameScenarios[index]));
            switch(this.store.currentScenario) {
                case 1:
                    this.store.dispatch(setScenarioSequenceLength(8));
                    break;
                case 2:
                    this.store.dispatch(setScenarioSequenceLength(8));
                    break;
                case 3:
                    this.store.dispatch(setScenarioSequenceLength(7));
                    break;
                case 4:
                    this.store.dispatch(setScenarioSequenceLength(6));
                    break;
            }
        } else {
            this.store.dispatch(resetScenarios())
        }
    }

    entryAnimation = () => {
        firstEntry(this.background, this.character);
    }

    showQuestion = (personToAnimate) => {
        this.store.dispatch(showQuestionBox(true));
        this.store.dispatch(incrementAnimationSequence());
     animateEmployeeCustomer(this.interactionWrap, this.employeeWrap, this.customerWrap, personToAnimate);
    }


    animateChart( sequence) {
        if(this.store.currentScenario === 1) {
            switch(sequence) {
                case 0:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: firstStep.top});
                    characterStop(this.character, 1.5 );

                    setTimeout(() => {
                        // this.store.dispatch(showQuestionBox(true));
                        // this.store.dispatch(incrementAnimationSequence());
                        this.showQuestion('customer');
                    }, 1500);
                    break;
                case 1:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: secondStep.top});
                    characterStop(this.character, 1.5 );
                    setTimeout(() => {
                        // this.store.dispatch(showQuestionBox(true));
                        // this.store.dispatch(incrementAnimationSequence());
                        this.showQuestion('both');
                    }, 1500);
                    break;
                case 2:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowOne.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowOne.leftOne});
                    characterPosition(this.character, 'facedown', 3.3);
                    TweenLite.to(this.background, .5, {delay: 3.5, top:  rowOne.topStand});
                    characterStop(this.character, 4 );
                    setTimeout(() => { this.showQuestion('employee')}, 4000);
                    break;
                case 3:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowOne.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowOne.leftTwo});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, .5, {delay: 3.5, top:  rowOne.topStand});
                    characterStop(this.character, 4 );
                    // this.store.dispatch(incrementAnimationSequence());
                    setTimeout(() => {  this.showQuestion('both')}, 4000);
                    break;
                case 4:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1, { top: rowOne.topNextRow});
                    characterPosition(this.character, 'faceright', 1);
                    TweenLite.to(this.background, 4.5, {delay: 1, left: rowTwo.leftStart});
                    characterPosition(this.character, 'facedown', 5.5);
                    TweenLite.to(this.background, .5, {delay: 5.5,  top: rowTwo.topStand});
                    characterStop(this.character, 6 );
                    // this.store.dispatch(incrementAnimationSequence());
                    setTimeout(() => { this.showQuestion('both')}, 6000);
                    break;
                case 5:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowTwo.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowTwo.leftOne});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, 0.5, {delay: 3.5, top: rowTwo.topStand});
                    characterStop(this.character, 4 );
                    // this.store.dispatch(incrementAnimationSequence());
                    setTimeout(() => { this.showQuestion('employee')}, 4000);
                    break;
                case 6:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, {  top: rowTwo.topWalk});
                    characterPosition(this.character, 'faceleft', 0.5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowTwo.leftTwo});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, 0.5, {delay: 3.5, top: rowTwo.topStand});
                    characterStop(this.character, 4 );
                    // this.store.dispatch(incrementAnimationSequence());
                    setTimeout(() => {  this.showQuestion('both')}, 4000);
                    break;
                case 7:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 0.5, { top: rowTwo.topWalk});
                    characterPosition(this.character, 'faceleft', 0.5);
                    TweenLite.to(this.background, 2, { delay: 0.5, left: scenarioOneEndRoute.endLeft1[0]});
                    characterPosition(this.character, 'facedown', 2.5);
                    TweenLite.to(this.background, 3, { delay: 2.5, top: scenarioOneEndRoute.endTop1[0]});
                    characterPosition(this.character, 'faceright', 5.5);
                    TweenLite.to(this.background, 3, { delay: 5.5, left: scenarioOneEndRoute.endLeft2[0]});
                    characterPosition(this.character, 'facedown', 8.5);
                    TweenLite.to(this.background, 1, { delay: 8.5, top: scenarioOneEndRoute.endTop2[0]});
                    characterStop(this.character, 9.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    setTimeout(() => { this.store.dispatch(showQuestionBox(true))}, 9500);
                    break;
                case 8:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 0.5, { top: scenarioOneEndRoute.finishTop1[0]});
                    characterPosition(this.character, 'faceleft', 0.5);
                    TweenLite.to(this.background, 2, { delay: 0.5, left: scenarioOneEndRoute.finishLeft1[0]});
                    characterPosition(this.character, 'facedown', 2.5);
                    TweenLite.to(this.background, 1, {delay: 2.5, top: scenarioOneEndRoute.finishTop2[0]});
                    characterStop(this.character, 3.5 );
                    // this.store.dispatch(incrementAnimationSequence());
                    // setTimeout(() => { this.store.dispatch(showQuestionBox(true))}, 3500);
                    setTimeout(() => {
                        this.store.dispatch(changeGameState('end'))
                    }, 4500)
                    break;

            }
        }

        if(this.store.currentScenario  === 2) {
            switch(sequence) {
                case 0:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: firstStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 1:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: secondStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 2:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: rowTwo.topStand});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 3:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowTwo.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowTwo.leftOne});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, .5, {delay: 3.5, top:  rowTwo.topStand});
                    characterStop(this.character, 4 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 4:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .3, { top: rowTwo.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowTwo.leftTwo});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, .5, {delay: 3.5, top:  rowTwo.topStand});
                    characterStop(this.character, 4 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 5:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1, { top: rowTwo.topNextRow});
                    characterPosition(this.character, 'faceright', 1);
                    TweenLite.to(this.background, 4.5, { delay: 1, left: rowThree.leftStart});
                    characterPosition(this.character, 'facedown', 5.5);
                    TweenLite.to(this.background, 0.5, {delay: 5.5, top: rowThree.topStand});
                    characterStop(this.character, 6 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 6:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop1});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 7:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop2});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 8:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop3});
                    characterStop(this.character, 1.5 );
                    break;
            }
        }

        if(this.store.currentScenario  === 3) {
            switch(sequence) {
                case 0:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: firstStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 1:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: secondStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 2:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: rowTwo.topStand});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 3:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: rowThree.topStand});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());;
                    break;
                case 4:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowThree.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowThree.leftOne});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, 1, {delay: 3.5, top:  rowThree.topStand});
                    characterStop(this.character, 4 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 5:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, .5, { top: rowThree.topWalk});
                    characterPosition(this.character, 'faceleft', .5);
                    TweenLite.to(this.background, 3, { delay: .5, left: rowThree.leftTwo});
                    characterPosition(this.character, 'facedown', 3.5);
                    TweenLite.to(this.background, 0.5, {delay: 3.5, top:  rowThree.topStand});
                    characterStop(this.character, 4 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 6:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 0.5, { top: rowThree.topWalk});
                    characterPosition(this.character, 'faceleft', 0.5);
                    TweenLite.to(this.background, 2, { delay: 0.5, left: scenarioThreeEndRoute.endLeft1[0]});
                    characterPosition(this.character, 'facedown', 2.5);
                    TweenLite.to(this.background, 3, { delay: 2.5, top: scenarioThreeEndRoute.endTop1[0]});
                    characterPosition(this.character, 'faceright', 5.5);
                    TweenLite.to(this.background, 3, { delay: 5.5, left: scenarioThreeEndRoute.endLeft2[0]});
                    characterPosition(this.character, 'facedown', 8.5);
                    TweenLite.to(this.background, 1, { delay: 8.5, top: scenarioThreeEndRoute.endTop2[0]});
                    characterStop(this.character, 9.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break
                case 7:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 0.5, { top: scenarioThreeEndRoute.finishTop1[0]});
                    characterPosition(this.character, 'faceleft', 0.5);
                    TweenLite.to(this.background, 2, { delay: 0.5, left: scenarioThreeEndRoute.finishLeft1[0]});
                    characterPosition(this.character, 'facedown', 2.5);
                    TweenLite.to(this.background, 1, {delay: 2.5, top: scenarioThreeEndRoute.finishTop2[0]});
                    characterStop(this.character, 3.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break
                case 8:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop3});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
            }
        }

        if(this.store.currentScenario  === 4) {
            switch(sequence) {
                case 0:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: firstStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 1:
                    characterPosition(this.character, 'facedown')
                    TweenLite.to(this.background, 1.5, {top: secondStep.top});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 2:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: rowTwo.topStand});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 3:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: rowThree.topStand});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());;
                    break;
                case 4:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop1});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 5:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop2});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
                case 6:
                    characterPosition(this.character, 'facedown');
                    TweenLite.to(this.background, 1.5, { top: scenarioTwoEndRoute.endTop3});
                    characterStop(this.character, 1.5 );
                    this.store.dispatch(incrementAnimationSequence());
                    break;
            }
        }
    }

    loadQuestion() {
        if(this.store.scenarioSequenceLength >= this.store.animationSequenceNumber) {
            this.store.dispatch(loadCurrentQuestionData());
        } else {
            // setTimeout(() => {
            //     // this.store.dispatch(changeGameState('end'))
            // }, 1500)
            this.store.dispatch(changeGameState('end'))

        }

    }
}

export default Scenario