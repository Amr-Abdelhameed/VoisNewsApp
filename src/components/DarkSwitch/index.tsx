import React, {useContext} from 'react';
import {Switch} from 'react-native';
import ThemeContext from '../../store/theme-context';
import {setTheme} from '../../preferences/Theme';
import {Themes} from '../../preferences/Theme/themes';
import {darkModeSwitchColors} from '../../utils/constants';

const DarkSwitch = () => {
  const {appTheme, setAppTheme} = useContext(ThemeContext);

  const toggleTheme = (theme: string) =>
    theme == Themes.light ? Themes.dark : Themes.light;

  const toggleSwitch = () => {
    setTheme(toggleTheme(appTheme));
    setAppTheme((previousState: string) => toggleTheme(previousState));
  };

  return (
    <Switch
      trackColor={darkModeSwitchColors}
      value={appTheme != Themes.light}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkSwitch;
