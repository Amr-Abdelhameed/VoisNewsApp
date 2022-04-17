import {createSlice} from '@reduxjs/toolkit';
import light from '../preferences/Theme/light';
import dark from '../preferences/Theme/dark';
import {Themes} from '../preferences/Theme/themes';

const initialThemeState = {
  colors: light,
  mode: Themes.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    setAppTheme: (state, action) => {
      if (action.payload === Themes.light) {
        state.colors = light;
        state.mode = Themes.light;
      } else {
        state.colors = dark;
        state.mode = Themes.dark;
      }
    },
  },
});

export const {setAppTheme} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
