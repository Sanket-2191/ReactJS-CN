import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {
        'timer/startTimer': (state, action) => {
            state.message = "Timer has started."
        },
        'timer/pauseTimer': (state, action) => {
            state.message = "Timer is paused."
        },
        'timer/resetTimer': (state, action) => {
            state.message = "Timer set to 0."
        }
    }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;


export const { resetMessage } = alertSlice.actions;
// create and export alert selector function here
export const alertSelector = (state) => state.alert;
// import { createSlice } from "@reduxjs/toolkit";
// import { pauseTimer, resetTimer, startTimer } from "./timerReducer";

// const INITIAL_STATE = { message: null };

// // create alert slice to handle start, pause, timer actions below
// const alertSlice = createSlice({
//     name: "alert",
//     initialState: INITIAL_STATE,
//     reducers: {
//         resetMessage: (state, action) => {
//             state.message = ""
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(startTimer, (state) => {
//                 state.message = "Timer has started.";
//             })
//             .addCase(pauseTimer, (state) => {
//                 state.message = "Timer paused.";
//             })
//             .addCase(resetTimer, (state) => {
//                 state.message = "Timer has been reset.";
//             });
//     }
// })

// // export the alert reducer function here
// export const alertReducer = alertSlice.reducer;


// export const { resetMessage } = alertSlice.actions;
// // create and export alert selector function here
// export const alertSelector = (state) => state.alert;
