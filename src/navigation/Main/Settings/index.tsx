import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../../components/Settings';
import {myNavigation} from '../../../utils/constants';
import {getLocaleValue} from '../../../utils/Locale';
import {AppContext} from '../../../utils/context';
import dark from '../../../utils/Theme/dark';
import light from '../../../utils/Theme/light';

const SettingsStack = createNativeStackNavigator();

export function SettingsRoot() {
  const {isDarkMode} = useContext(AppContext);

  return (
    <SettingsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
        contentStyle: {
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
        headerTintColor: isDarkMode ? dark.text.color : light.text.color,
      })}>
      <SettingsStack.Screen
        name={myNavigation.main.settings.name}
        component={Settings}
        options={{title: getLocaleValue('settings')}}
      />
    </SettingsStack.Navigator>
  );
}
