import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../../screens/Settings';
import {routes} from '../../../utils/constants';
import {getLocaleValue} from '../../../preferences/Locale';
import {useAppTheme} from '../../../preferences/Theme/useAppTheme';

const SettingsStack = createNativeStackNavigator();

export default function SettingsRoot() {
  const {colors} = useAppTheme();

  return (
    <SettingsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.accentColor,
        },
        contentStyle: {
          backgroundColor: colors.accentColor,
        },
        headerTintColor: colors.primaryColor,
      })}>
      <SettingsStack.Screen
        name={routes.main.settings.name}
        component={Settings}
        options={{title: getLocaleValue('settings')}}
      />
    </SettingsStack.Navigator>
  );
}
