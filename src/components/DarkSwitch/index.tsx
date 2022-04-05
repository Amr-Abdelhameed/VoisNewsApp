import React, {useContext} from 'react';
import {Switch} from 'react-native';
import styles from './styles';
import {AppContext} from '../../utils/context';
import {setThemeMode, Themes} from '../../utils/Theme';

const DarkSwitch = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

  const toggleSwitch = () => {
    setThemeMode(isDarkMode ? Themes.light : Themes.dark);
    setIsDarkMode((previousState: boolean) => !previousState);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      style={styles.switch}
      value={isDarkMode}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkSwitch;
