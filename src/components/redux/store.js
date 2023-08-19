import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme/themeSlice';
import quotesSlice from './quotes/quotesSlice';
import cryptosSlice from './crypto/cryptosSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    quotes: quotesSlice,
    cryptos: cryptosSlice,
  },
});

export default store;
