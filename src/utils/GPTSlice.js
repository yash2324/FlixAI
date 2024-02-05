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
    falseShowGPTSearch: (state) => {
      state.showGPTSearch = false;
    },
    addGPTSearchList: (state, action) => {
      state.gptSearchList = action.payload;
    },
  },
});

export const { toggleShowGPTSearch, addGPTSearchList, falseShowGPTSearch } =
  GPTSlice.actions;
export default GPTSlice.reducer;
