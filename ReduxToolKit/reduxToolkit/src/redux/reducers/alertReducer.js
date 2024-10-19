import { createSlice } from "@reduxjs/toolkit";
import { pauseTimer, resetTimer, startTimer } from "./timerReducer";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name: "alert",
    initialState: INITIAL_STATE,
    reducers: {
        resetMessage: (state, action) => {
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(startTimer, (state) => {
                // state.message = ""
                state.message = "Timer has started.";
                console.log(state.message);

            })
            .addCase(pauseTimer, (state) => {
                // state.message = ""
                state.message = "Timer paused.";
                console.log(state.message);
            })
            .addCase(resetTimer, (state) => {
                // state.message = ""
                state.message = "Timer has been reset.";
            });
    }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;
// 
export const { resetMessage } = alertSlice.actions;
// create and export alert selector function here
export const alertSelector = (state) => state.alert;


{/*const INITIAL_STATE = { message: null, showMsg: false };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name: "alert",
    initialState: INITIAL_STATE,
    reducers: {
        resetMessage: (state, action) => {
            state.showMsg = false
            set
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(startTimer, (state) => {
                // state.message = ""
                state.showMsg = true
                state.message = "Timer has started.";
                console.log(state.message);

            })
            .addCase(pauseTimer, (state) => {
                // state.message = ""
                state.showMsg = true
                state.message = "Timer paused.";
                console.log(state.message);
            })
            .addCase(resetTimer, (state) => {
                // state.message = ""
                state.showMsg = true
                state.message = "Timer has been reset.";
                console.log(state.message);
            });
    }
})
*/}