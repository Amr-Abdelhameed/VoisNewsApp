import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsRoot} from './News';
import {SettingsRoot} from './Settings';
import {myNavigation} from '../../utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getLocaleValue} from '../../utils/Locale';
import {AppContext} from '../../utils/context';
import dark from '../../utils/Theme/dark';
import light from '../../utils/Theme/light';

const BottomTabNav = createBottomTabNavigator();

const BottomNavigation = () => {
  const {isDarkMode} = useContext(AppContext);

  return (
    <BottomTabNav.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
        tabBarActiveTintColor: isDarkMode
          ? dark.tabBarActiveTintColor
          : light.tabBarActiveTintColor,
        tabBarInactiveTintColor: isDarkMode
          ? dark.tabBarInactiveTintColor
          : light.tabBarInactiveTintColor,
      })}>
      <BottomTabNav.Screen
        name={myNavigation.main.news.stack}
        component={NewsRoot}
        options={{
          tabBarLabel: getLocaleValue('news'),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNav.Screen
        name={myNavigation.main.settings.stack}
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
};

export default BottomNavigation;
