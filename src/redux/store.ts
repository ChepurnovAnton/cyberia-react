import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import projectsSlice from "./slices/projectsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../API/categories";

export const store = configureStore({
  reducer: {
    categoriesSlice,
    projectsSlice,
    [categoriesApi.reducerPath]: categoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)