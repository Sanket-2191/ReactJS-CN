import {
    DECREASE_COUNTER,
    INCREMENT_COUNTER,
    RESET_COUNTER,
} from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREASE_COUNTER:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET_COUNTER:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};
