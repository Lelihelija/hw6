import {combineReducers, createStore} from "redux";
import postReducer from './post-reducer.js';

// let reducers = combineReducers({});

let store = createStore(postReducer);




export default store;