import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    GPT: GPTReducer,
    config: configReducer,
  },
});
export default appStore;
