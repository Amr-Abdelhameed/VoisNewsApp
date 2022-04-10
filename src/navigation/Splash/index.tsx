import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import {myNavigation} from '../../utils/constants';
import AppContext from '../../context/AppContext';
import dark from '../../preferences/Theme/dark';
import light from '../../preferences/Theme/light';

const SplashStack = createNativeStackNavigator();

export default function SplashRoot() {
  const {isDarkMode} = useContext(AppContext);

  return (
    <SplashStack.Navigator
      screenOptions={() => ({
        contentStyle: {
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
      })}>
      <SplashStack.Screen
        name={myNavigation.splash.name}
        component={Splash}
        options={{headerShown: false}}
      />
    </SplashStack.Navigator>
  );
}
