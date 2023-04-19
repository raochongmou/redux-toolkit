import { createSlice } from "@reduxjs/toolkit";

const sliceReducer = createSlice({
  name: "counter",
  reducers: {
    addCounter(state, actions) {
      return { ...state, counter: actions.counter + state.counter.counter };
    },
    subCounter(state, actions) {}
  },
  initialState: {
    counter: 100
  }
});

console.log("sliceReducer.reducer", sliceReducer.reducer);

export default sliceReducer.reducer;
