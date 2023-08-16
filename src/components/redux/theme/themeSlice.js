import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => ({
      ...state,
      value: !state.value,
    }),
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
