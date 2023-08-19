import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme/themeSlice';
import cryptosSlice from './crypto/cryptosSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    cryptos: cryptosSlice,
  },
});

export default store;
