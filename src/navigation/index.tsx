import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashRoot from './Splash';
import BottomNavigationRoot from './Main';
import {myNavigation} from '../utils/constants';

const NavStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen
          name={myNavigation.splash.stack}
          component={SplashRoot}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name={myNavigation.main.stack}
          component={BottomNavigationRoot}
          options={{headerShown: false}}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
