import { configureStore } from "@reduxjs/toolkit";
import noticiasReducer from "./slices/noticiasSlice";

export const store = configureStore({
  reducer: {
    noticias: noticiasReducer,
  },
});
