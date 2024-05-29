import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload
    },
  }
})

export const { getCategories} = categoriesSlice.actions
export default categoriesSlice.reducer