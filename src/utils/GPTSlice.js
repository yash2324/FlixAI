import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleShowGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleShowGPTSearch } = GPTSlice.actions;
export default GPTSlice.reducer;
