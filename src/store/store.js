// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./Slices/testSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});