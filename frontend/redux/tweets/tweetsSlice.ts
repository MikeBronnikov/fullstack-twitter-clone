import { LoadingEnum } from '../../types';
import { Tweet } from './../tweet/types';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";




export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    items: [] as Tweet[],
    tweetsLoadingStatus: LoadingEnum.never as LoadingEnum,
    wasFailNotificated: false,
  },
  reducers: {
    fetchTweets(){},
    setTweets: (state, action: PayloadAction<Array<Tweet>>) => {
      state.items = action.payload;
    },
    setLoadingStatus(state, action: PayloadAction<LoadingEnum>){
      state.tweetsLoadingStatus = action.payload
    },
    setWasFailNotificated(state, action: PayloadAction<boolean>){
      state.wasFailNotificated = action.payload
    }
  },
});

// export const GetUsersCards = createAsyncThunk(
//   "users/GetUsersCards",
//   async (params,  { dispatch }) => {
//     try {
//       const response: Array<UserType> = await axios
//         .get("http://localhost:8001/tinder/cards")
//         .then((res) => res.data);
//         dispatch(addToUsersCards(response));
      
//     } catch (error) {

//       console.error(error)
      
//     }
//   }
// );
// Action creators are generated for each case reducer function
export const { fetchTweets, setTweets, setLoadingStatus, setWasFailNotificated
 } = tweetsSlice.actions;

export default tweetsSlice.reducer;
