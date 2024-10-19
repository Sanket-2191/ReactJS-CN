import { configureStore } from "@reduxjs/toolkit";

import { timerReducer } from "./redux/reducers/timerReducer.js";
import { counterReducer } from "./redux/reducers/counterReducer.js";
import { alertReducer } from "./redux/reducers/alertReducer.js";
// import and include the alert reducer function inside the store

export const store = configureStore({
  reducer: { timer: timerReducer, counter: counterReducer, alert: alertReducer }
});
