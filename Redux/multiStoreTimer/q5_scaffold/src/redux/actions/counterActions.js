// define counter action constants here
export const DECREASE_COUNTER = "Decrease Counter"; // Fix this name

export const RESET_COUNTER = "Reset Counter";
export const INCREMENT_COUNTER = "Increment Counter";

// define counter action creators here

export const decreaseCounter = () => ({ type: DECREASE_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });
