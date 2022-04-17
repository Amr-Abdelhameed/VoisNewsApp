import {configureStore} from '@reduxjs/toolkit';
import {themeReducer} from './theme-slice';
import {languageReducer} from './language-slice';
import {newsReducer} from './news-slice';
import {articleReducer} from './news-details-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    news: newsReducer,
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
