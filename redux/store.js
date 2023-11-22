import { createStore } from "redux";
import todoReducer from "./reducer";

export let store = createStore(todoReducer);