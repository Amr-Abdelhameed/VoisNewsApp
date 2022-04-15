import {useContext} from 'react';
import ThemeContext from '../../store/theme-context';
import dark from './dark';
import light from './light';
import {Themes} from './themes';

export function useAppTheme() {
  const {appTheme} = useContext(ThemeContext);
  return Object.freeze({colors: appTheme == Themes.light ? light : dark});
}
