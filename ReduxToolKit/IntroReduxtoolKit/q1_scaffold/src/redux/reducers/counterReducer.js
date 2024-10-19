import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// Refactored counterSlice
const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    resetCounter: (state) => {
      state.count = 0;
    },
    incrementCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },
  },
});

// Export the counter reducer and action creators
export const counterReducer = counterSlice.reducer;
export const { resetCounter, incrementCounter, decrementCounter } = counterSlice.actions;
