import {createSlice} from '@reduxjs/toolkit';
import {status} from '../utils/constants';

const initialArticleState = {
  data: null,
  status: status.idle,
  errorMessage: '',
};

const articleSlice = createSlice({
  name: 'article',
  initialState: initialArticleState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {setStatus, setData, setErrorMessage} = articleSlice.actions;

export const articleReducer = articleSlice.reducer;
