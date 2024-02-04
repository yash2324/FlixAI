import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    gptSearchList: null,
  },
  reducers: {
    toggleShowGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTSearchList: (state, action) => {
      state.gptSearchList = action.payload;
    },
  },
});

export const { toggleShowGPTSearch, addGPTSearchList } = GPTSlice.actions;
export default GPTSlice.reducer;
