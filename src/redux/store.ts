import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import projectsSlice from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    categoriesSlice,
    projectsSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch