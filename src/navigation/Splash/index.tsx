import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import {routes} from '../../utils/constants';
import AppContext from '../../context/AppContext';
import * as Theme from '../../preferences/Theme';

const SplashStack = createNativeStackNavigator();

export default function SplashRoot() {
  const {themeMode} = useContext(AppContext);

  return (
    <SplashStack.Navigator
      screenOptions={() => ({
        contentStyle: {
          backgroundColor: Theme.background(themeMode).backgroundColor,
        },
      })}>
      <SplashStack.Screen
        name={routes.splash.name}
        component={Splash}
        options={{headerShown: false}}
      />
    </SplashStack.Navigator>
  );
}
