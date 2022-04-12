import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import {routes} from '../../utils/constants';
import {useAppTheme} from '../../preferences/Theme/useAppTheme';

const SplashStack = createNativeStackNavigator();

export default function SplashRoot() {
  const {colors} = useAppTheme();

  return (
    <SplashStack.Navigator
      screenOptions={() => ({
        contentStyle: {
          backgroundColor: colors.accentColor,
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
