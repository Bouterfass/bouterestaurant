import { createStore, combineReducers } from "redux";
import logReducer from "./logStorage/logReducer";
import overReducer from "./overlay/overReducer";

const reducer = combineReducers ({
    logReducer,
    overReducer
})

const store = createStore(reducer);


export default store;