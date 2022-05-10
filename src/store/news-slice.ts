import {createSlice} from '@reduxjs/toolkit';
import {status} from '../utils/constants';

const initialNewsState = {
  list: [],
  status: status.idle,
  errorMessage: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    appendList: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {setStatus, setList, appendList, setErrorMessage} =
  newsSlice.actions;

export const newsReducer = newsSlice.reducer;
