import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import authReducer from "./authSlice"
export const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    auth: authReducer,
  },
});
