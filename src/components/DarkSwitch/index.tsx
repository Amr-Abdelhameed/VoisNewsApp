import React, {useContext} from 'react';
import {Switch} from 'react-native';
import AppContext from '../../context/AppContext';
import {setTheme, Themes} from '../../preferences/Theme';
import colors from './colors';

const DarkSwitch = () => {
  const {themeMode, setThemeMode} = useContext(AppContext);

  const currentTheme = (theme: string) =>
    theme == Themes.light ? Themes.dark : Themes.light;

  const toggleSwitch = () => {
    setTheme(currentTheme(themeMode));
    setThemeMode((previousState: string) => currentTheme(previousState));
  };

  return (
    <Switch
      trackColor={{false: colors[0], true: colors[1]}}
      value={themeMode != Themes.light}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkSwitch;
