import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=money', {
        headers: { 'X-Api-Key': 'h6ZSbt/6hFr+I41Te6X9MQ==pZatexyS3WNqSWPx' },
        contentType: 'application/json',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Something went wrong with fetching quote');
    }
  },
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchQuotes.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        value: action.payload,
      }))
      .addCase(fetchQuotes.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default quotesSlice.reducer;
