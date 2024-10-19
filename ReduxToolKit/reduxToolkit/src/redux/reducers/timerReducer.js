import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { elapsedTime: 0, isRunning: false };

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
      state.elapsedTime += 1; // Clearer increment
    }
  }
});

export const timerReducer = timerSlice.reducer;
export const {
  startTimer,
  pauseTimer,
  resetTimer,
  incrementTimer
} = timerSlice.actions;

// Updated selector to match store configuration
export const timerSelector = (state) => state.timer;
