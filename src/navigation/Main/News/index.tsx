import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../../../screens/News';
import NewsDetails from '../../../screens/NewsDetails';
import {routes} from '../../../utils/constants';
import {getLocaleValue} from '../../../preferences/Locale';
import AppContext from '../../../context/AppContext';
import * as Theme from '../../../preferences/Theme';

const NewsStack = createNativeStackNavigator();

export default function NewsRoot() {
  const {themeMode} = useContext(AppContext);

  return (
    <NewsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: Theme.background(themeMode).backgroundColor,
        },
        contentStyle: {
          backgroundColor: Theme.background(themeMode).backgroundColor,
        },
        headerTintColor: Theme.text(themeMode).color,
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
