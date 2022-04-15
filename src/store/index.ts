import {configureStore} from '@reduxjs/toolkit';
import {themeReducer} from './theme-slice';
import {languageReducer} from './language-slice';

export const store = configureStore({
  reducer: {theme: themeReducer, language: languageReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
