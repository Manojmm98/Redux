// when we have more than ne reducer we will combine the all reducer in a root reducer 
// combinedreducers is a function where we pass our reducer as object and export it

import { combineReducers } from "redux";
import BallReducer from './Ball/BallReducer';
import BatReducer from './Bat/BatReducer';

const rootReducer = combineReducers ( {
    ball:BallReducer,
    bat:BatReducer
})

export default rootReducer;