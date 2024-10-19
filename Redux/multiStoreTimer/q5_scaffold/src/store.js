import { createStore, combineReducers } from "redux";
import { timerReducer } from "./redux/reducers/timerReducer";
import { counterReducer } from "./redux/reducers/counterReducer";

// Combine reducers with proper state names
const rootReducer = combineReducers({
    timer: timerReducer,
    counter: counterReducer,
});

// Create store
export const store = createStore(rootReducer);
