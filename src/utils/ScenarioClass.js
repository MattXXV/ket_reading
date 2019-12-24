import { TweenLite, TimelineLite, CSSPlugin } from "gsap/all";
import {loadScenario, resetScenarios} from "../actions/gameEngine";
import { coordinates } from '../staticData/data';

const C = CSSPlugin;

class Scenario  {
    constructor(scenario, background, character = undefined, store = {}) {
        this.scenario = scenario;
        this.background = background;
        this.character = character;
        this.store = store
    }

    pickScenario() {
        const scenarioBank = this.store.gameScenarios.length;
        if(scenarioBank > 0) {
            let index = scenarioBank * Math.random();
            index = Math.floor(index);

            this.store.dispatch(loadScenario(this.store.gameScenarios[index]))
        } else {
            this.store.dispatch(resetScenarios())
        }
    }


    animateChart( sequence) {
        const dataIndex = this.store.currentScenario - 1;
        let actionNumber;
        console.log('store',this.store.gameScenarios);
        if( sequence === 0) {
            TweenLite.to(this.background, 1, {delay: 0.5, top: coordinates[dataIndex].sequenceOne[0]});
        }
        if( this.scenario === 1) {
            TweenLite.to(this.background, 1, {delay: 0.5, top: 45});
        }
    }
}

export default Scenario