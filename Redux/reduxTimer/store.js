import { createStore } from "redux";
import { timerReducer } from "./src/redux/reducers/timerReducer";

export const store = createStore(timerReducer);
