import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashRoot from './Splash';
import BottomNavigationRoot from './Main';
import {routes} from '../utils/constants';

const NavStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen
          name={routes.splash.stack}
          component={SplashRoot}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name={routes.main.stack}
          component={BottomNavigationRoot}
          options={{headerShown: false}}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
