import {combineReducers, createStore} from "redux";
import { addPostReducer } from "./redux/add-post-reducer";
import { postInteractionsReducer } from './redux/post-interactions-reducer';

const reducer = combineReducers({
    addPostReducer,
    postInteractionsReducer,
})

const store = createStore(

    reducer,

)

export default store;