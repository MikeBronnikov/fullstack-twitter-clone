import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullTweet } from "./types";




export const fullTweetSlice = createSlice({
  name: "fullTweet",
  initialState: {
   data: null as null | Array<FullTweet>
  },
  reducers: {
    fetchFullTweet(state, action: PayloadAction<string | string>){},
    setFullTweet: (state, action: PayloadAction<FullTweet[]>) => {
      state.data = action.payload
    },
    
  },
});

export const { fetchFullTweet, setFullTweet
 } = fullTweetSlice.actions;

export default fullTweetSlice.reducer;
