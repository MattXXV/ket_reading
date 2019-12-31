import { createStore } from 'redux';
import gameEngineReducer from '../reducers/gameEngine';
// import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        // combineReducers({
        //     gameEngine: gameEngineReducer
        // })
        gameEngineReducer
    )

    return store;
}

