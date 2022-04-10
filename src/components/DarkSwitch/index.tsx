import React, {useContext} from 'react';
import {Switch} from 'react-native';
import AppContext from '../../context/AppContext';
import {setThemeMode, Themes} from '../../preferences/Theme';

const DarkSwitch = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

  const toggleSwitch = () => {
    setThemeMode(isDarkMode ? Themes.light : Themes.dark);
    setIsDarkMode((previousState: boolean) => !previousState);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      value={isDarkMode}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkSwitch;
