import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  activeCategory: ''
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjects: (state, action: PayloadAction<[]>) => {
      state.projects = action.payload
    },
    changeCategory: (state, action) => {
      state.activeCategory = action.payload
    }
  }
})

export const { getProjects, changeCategory } = projectsSlice.actions
export default projectsSlice.reducer