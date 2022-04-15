import React from 'react';
import {Switch} from 'react-native';
import {setTheme} from '../../preferences/Theme';
import {Themes} from '../../preferences/Theme/themes';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {setAppTheme} from '../../store/theme-slice';
import {darkModeSwitchColors} from '../../utils/constants';
import {useAppDispatch} from '../../utils/Hooks';

const DarkSwitch = () => {
  const {mode} = useAppTheme();
  const dispatch = useAppDispatch();

  const toggleTheme = (theme: string) =>
    theme == Themes.light ? Themes.dark : Themes.light;

  const toggleSwitch = () => {
    setTheme(toggleTheme(mode));
    dispatch(setAppTheme(toggleTheme(mode)));
  };

  return (
    <Switch
      trackColor={darkModeSwitchColors}
      value={mode != Themes.light}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkSwitch;
