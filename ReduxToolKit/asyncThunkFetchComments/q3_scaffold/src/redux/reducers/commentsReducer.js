import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// Define and export comments async thunk below
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
      return data; // return data to be used in fulfilled case
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to fetch comments."); // return error message
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    // You might not need these if you are handling everything with the thunk
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.error = action.payload; // Set error message from thunk
        state.isLoading = false;
      });
  }
});

// Export the comments reducer and selector
export const commentsReducer = commentsSlice.reducer;

export const commentsSelector = (state) => state.comments;
