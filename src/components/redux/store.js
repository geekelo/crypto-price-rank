import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
