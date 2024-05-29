import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Iproject {

}

interface IInitialState {
  projects: Iproject[];
  activeCategory: number | null
}

const initialState: IInitialState = {
  projects: [],
  activeCategory: null
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