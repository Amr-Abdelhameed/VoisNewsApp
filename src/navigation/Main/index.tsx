import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsRoot from './News';
import SettingsRoot from './Settings';
import {routes} from '../../utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../preferences/Locale/use-app-language';

const BottomTabNav = createBottomTabNavigator();

export default function BottomNavigationRoot() {
  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

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
          tabBarLabel: strings.news,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name={routes.main.settings.stack}
        component={SettingsRoot}
        options={{
          tabBarLabel: strings.settings,
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
