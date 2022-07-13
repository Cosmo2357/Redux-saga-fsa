import counterReducer from "./counter";
import sagaCounterReducer from "./sagaCounter";
//import { fsaReducer } from "./fsaReducer";
import { combineReducers } from "redux";
import {fsaReducer} from "./fsaReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    sagaCounter: sagaCounterReducer,
    fsa: fsaReducer
});

export default rootReducer;