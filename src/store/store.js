import { createStore } from "redux";
import logReducer from "./logReducer";

const store = createStore(logReducer);


export default store;