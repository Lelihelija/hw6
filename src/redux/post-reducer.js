// import {combineReducers, createStore} from "redux";


let postReducer = (store, action) => {
    const newStore = store;
    if(action.type === "ADD_POST"){
        // newStore.data.test = action.payload.test;
    }
    if(action.type === "INCREMENT_QUANTITY") {
        // newStore.element = {...action.element};
        return newStore.element + 1;
    }
    if(action.type === "DECREMENT_QUANTITY") {
        // newStore.rights = {...action.rights};
        return newStore.element + 1;
    }
    return newStore;
}




export default postReducer;