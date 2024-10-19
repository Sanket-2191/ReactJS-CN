import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "../actions/fetchActions";

const INITIAL_STATE = { isLoading: false, data: [], error: null };

export const fetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null, // Clear error on new fetch
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,  // Set isLoading to false when data is fetched
            };
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,  // Set isLoading to false when an error occurs
            };
        default:
            return state;
    }
};
