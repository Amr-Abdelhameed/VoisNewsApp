import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../../../screens/News';
import NewsDetails from '../../../screens/NewsDetails';
import {routes} from '../../../utils/constants';
import {useAppTheme} from '../../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../../preferences/Locale/use-app-language';

const NewsStack = createNativeStackNavigator();

export default function NewsRoot() {
  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

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
        headerBackTitle: strings.back,
      })}>
      <NewsStack.Screen
        name={routes.main.news.name}
        component={News}
        options={{title: strings.news}}
      />
      <NewsStack.Screen
        name={routes.main.news.details}
        component={NewsDetails}
        options={{title: strings.details}}
      />
    </NewsStack.Navigator>
  );
}
