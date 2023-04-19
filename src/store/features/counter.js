import { createSlice } from "@reduxjs/toolkit";

const sliceReducer = createSlice({
  name: "counter",
  reducers: {
    addCounter(state, { payload }) {
      state.counter = payload + state.counter;
    },
    subCounter(state, actions) {}
  },
  initialState: {
    counter: 100
  }
});

console.log("sliceReducer.reducer", sliceReducer);
export const addCounter = sliceReducer.actions.addCounter;
export const subCounter = sliceReducer.actions.subCounter;

export default sliceReducer.reducer;
