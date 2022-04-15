import {createSlice} from '@reduxjs/toolkit';
import en from '../preferences/Locale/en';
import de from '../preferences/Locale/de';
import {Languages} from '../preferences/Locale/languages';

const initialLanguageState = {
  strings: en,
};

const languageSlice = createSlice({
  name: 'language',
  initialState: initialLanguageState,
  reducers: {
    setAppLanguage: (state, action) => {
      if (action.payload === Languages.en) {
        state.strings = en;
      } else {
        state.strings = de;
      }
    },
  },
});

export const {setAppLanguage} = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
