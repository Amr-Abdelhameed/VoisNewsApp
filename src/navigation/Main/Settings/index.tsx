import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../../screens/Settings';
import {routes} from '../../../utils/constants';
import {useAppTheme} from '../../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../../preferences/Locale/use-app-language';

const SettingsStack = createNativeStackNavigator();

export default function SettingsRoot() {
  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

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
        options={{title: strings.settings}}
      />
    </SettingsStack.Navigator>
  );
}
