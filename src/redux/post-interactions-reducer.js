import { INCREMENT, DECREMENT } from "./types";

export const postInteractionsReducer = (state = [], action) => {
    const newState = state;
    switch (action.type) {
        case "INCREMENT": {
            newState.authors = {...action.element};
            return newState.element + 1;           
            }
        case "DECREMENT": {
            newState.rights = {...action.rights};
            return newState.element + 1;
        }
    }
    return state;
}

