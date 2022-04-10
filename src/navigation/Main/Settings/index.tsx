import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../../screens/Settings';
import {routes} from '../../../utils/constants';
import {getLocaleValue} from '../../../preferences/Locale';
import AppContext from '../../../context/AppContext';
import * as Theme from '../../../preferences/Theme';

const SettingsStack = createNativeStackNavigator();

export default function SettingsRoot() {
  const {themeMode} = useContext(AppContext);

  return (
    <SettingsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Theme.background(themeMode).backgroundColor,
        },
        contentStyle: {
          backgroundColor: Theme.background(themeMode).backgroundColor,
        },
        headerTintColor: Theme.text(themeMode).color,
      })}>
      <SettingsStack.Screen
        name={routes.main.settings.name}
        component={Settings}
        options={{title: getLocaleValue('settings')}}
      />
    </SettingsStack.Navigator>
  );
}
