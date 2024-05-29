import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  activePage: string;
}

const initialState: IInitialState = {
  activePage: '',
}

export const pageSlice = createSlice({
  name: 'activeLocation',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.activePage = action.payload
    }
  }
})

export const { changePage } = pageSlice.actions
export default pageSlice.reducer