import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import darkSlice from "./slices/darkSlice";

export const store = configureStore({
   reducer:{
      counter:counterSlice,
      darkMode:darkSlice
   }
})