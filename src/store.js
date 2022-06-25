import { configureStore } from "@reduxjs/toolkit";
import guestsReducer from "./guestsReducer";

export const store = configureStore({
  reducer: {
    guestsState: guestsReducer
  }
});
