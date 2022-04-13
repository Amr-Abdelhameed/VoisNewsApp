import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../../../screens/News';
import NewsDetails from '../../../screens/NewsDetails';
import {routes} from '../../../utils/constants';
import {getLocaleValue} from '../../../preferences/Locale';
import {useAppTheme} from '../../../preferences/Theme/use-app-theme';

const NewsStack = createNativeStackNavigator();

export default function NewsRoot() {
  const {colors} = useAppTheme();

  return (
    <NewsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.accentColor,
        },
        contentStyle: {
          backgroundColor: colors.accentColor,
        },
        headerTintColor: colors.primaryColor,
      })}>
      <NewsStack.Screen
        name={routes.main.news.name}
        component={News}
        options={{title: getLocaleValue('news')}}
      />
      <NewsStack.Screen
        name={routes.main.news.details}
        component={NewsDetails}
        options={{title: getLocaleValue('details')}}
      />
    </NewsStack.Navigator>
  );
}
