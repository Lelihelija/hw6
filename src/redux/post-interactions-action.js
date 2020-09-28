import {INCREMENT, DECREMENT} from "./types";

const addQuantity = ( data ) => {
    return {
        type: INCREMENT,
        payload: data,
    }
    
}

const reduceQuantity = ( data ) => {
    return {
        type: DECREMENT,
        payload: data,
    }
    
}

export {addQuantity, reduceQuantity}

