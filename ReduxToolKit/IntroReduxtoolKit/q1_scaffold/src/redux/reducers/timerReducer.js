import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// Refactored timerSlice
const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    incrementTimer: (state) => {
      state.elapsedTime += 1;
    },
  },
});

// Export the timer reducer and action creators
export const timerReducer = timerSlice.reducer;
export const { startTimer, pauseTimer, resetTimer, incrementTimer } = timerSlice.actions;
