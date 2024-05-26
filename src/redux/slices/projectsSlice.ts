import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjects: (state, action: PayloadAction<[]>) => {
      state.projects = action.payload
    }
  }
})

export const { getProjects } = projectsSlice.actions
export default projectsSlice.reducer