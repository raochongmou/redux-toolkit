import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMultiData = createAsyncThunk(
  "home/fetchMultiData",
  async (_, { dispatch, getState }) => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    // console.log("dispatch", dispatch);
    dispatch(changeBanners(banners));
    dispatch(changeRecommends(recommends));
    // return;
  }
);
// export const fetchMultiData = createAsyncThunk(
//   "home/fetchMultiData",
//   async () => {
//     return (await axios.get("http://123.207.32.32:8000/home/multidata")).data
//       .data;
//   }
// );

const sliceReducer = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    }
  }
  // extraReducers: {
  //   [fetchMultiData.pending](state, actions) {
  //     console.log("pending");
  //   },
  //   [fetchMultiData.fulfilled](state, { payload }) {
  //     console.log("fulfilled", payload);
  //     state.banners = payload.banner.list;
  //     state.recommends = payload.recommend.list;
  //   },
  //   [fetchMultiData.rejected](state, actions) {
  //     console.log("rejected");
  //   }
  // }
  // extraReducers: builder => {
  //   builder.addCase(fetchMultiData.fulfilled, (state, { payload }) => {
  //     state.banners = payload.banner.list;
  //     state.recommends = payload.recommend.list;
  //   });
  // }
});

export const { changeBanners, changeRecommends } = sliceReducer.actions;

export default sliceReducer.reducer;
