import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchCryptos = createAsyncThunk(
  'quotes/fetchCryptos',
  async () => {
    try {
      const response = await fetch('https://api.coincap.io/v2/assets');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw new Error('Something went wrong with fetching quote');
    }
  },
);

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCryptos.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        value: action.payload,
      }))
      .addCase(fetchCryptos.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default cryptosSlice.reducer;
