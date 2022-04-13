import {useContext} from 'react';
import ThemeContext from '../../context/theme-context';
import dark from './dark';
import light from './light';
import {Themes} from './themes';

export function useAppTheme() {
  const {themeMode} = useContext(ThemeContext);
  return Object.freeze({colors: themeMode == Themes.light ? light : dark});
}
