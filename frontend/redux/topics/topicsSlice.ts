import { LoadingEnum } from '../../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Topic } from './types';

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    items: [] as Topic[],
    topicsLoadingStatus: LoadingEnum.never as LoadingEnum,
  },
  reducers: {
    fetchTopics(){},
    setTopics(state, action: PayloadAction<Topic[]>){
      state.items = action.payload
    },
    setLoadingStatus(state, action: PayloadAction<LoadingEnum>){
    state.topicsLoadingStatus = action.payload
    }

}});

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
export const { fetchTopics, setTopics, setLoadingStatus } = topicsSlice.actions;

export default topicsSlice.reducer;
