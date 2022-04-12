import {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import dark from './dark';
import light from './light';
import {Themes} from './types';

export function useAppTheme() {
  const {themeMode} = useContext(ThemeContext);
  return Object.freeze({colors: themeMode == Themes.light ? light : dark});
}
