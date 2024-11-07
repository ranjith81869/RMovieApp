import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import moviesReducer from "./Movieslice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer
  },
});
