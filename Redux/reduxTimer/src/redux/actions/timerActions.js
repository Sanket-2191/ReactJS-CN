// define action constants here
export const INCREMENT_TIMER = "increment Timer"
export const PAUSE_TIMER = "pause Timer"
export const RESET_TIMER = "reset Timer"
export const START_TIMER = "start Timer"
// define action creators here

export const incrementTimer = () => ({ data: null, type: INCREMENT_TIMER });

export const pauseTimer = () => ({ data: null, type: PAUSE_TIMER });
export const resetTimer = () => ({ data: null, type: RESET_TIMER });
export const startTimer = () => ({ data: null, type: START_TIMER });