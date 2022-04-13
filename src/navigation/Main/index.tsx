import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsRoot from './News';
import SettingsRoot from './Settings';
import {routes} from '../../utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getLocaleValue} from '../../preferences/Locale';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';

const BottomTabNav = createBottomTabNavigator();

export default function BottomNavigationRoot() {
  const {colors} = useAppTheme();

  return (
    <BottomTabNav.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.accentColor,
        },
        tabBarActiveTintColor: colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: colors.tabBarInactiveTintColor,
      })}>
      <BottomTabNav.Screen
        name={routes.main.news.stack}
        component={NewsRoot}
        options={{
          tabBarLabel: getLocaleValue('news'),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name={routes.main.settings.stack}
        component={SettingsRoot}
        options={{
          tabBarLabel: getLocaleValue('settings'),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabNav.Navigator>
  );
}
