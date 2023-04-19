import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (page) => {
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return res.data.results;
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    page: 1,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = 'succeeded';
      state.page += 1;

      if (action.payload.length < 20) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
