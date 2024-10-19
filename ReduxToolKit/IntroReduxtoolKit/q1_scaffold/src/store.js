const { configureStore } = require("@reduxjs/toolkit");
const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

// Refactor to use configureStore
export const store = configureStore({
  reducer: {
    timer: timerReducer,    // key `timer` for timer state
    counter: counterReducer, // key `counter` for counter state
  }
});
