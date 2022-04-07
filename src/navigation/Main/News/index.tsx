import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../../../components/News';
import NewsDetails from '../../../components/NewsDetails';
import {myNavigation} from '../../../utils/constants';
import {getLocaleValue} from '../../../utils/Locale';
import {AppContext} from '../../../utils/context';
import dark from '../../../utils/Theme/dark';
import light from '../../../utils/Theme/light';

const NewsStack = createNativeStackNavigator();

export default function NewsRoot() {
  const {isDarkMode} = useContext(AppContext);

  return (
    <NewsStack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
        contentStyle: {
          backgroundColor: isDarkMode
            ? dark.background.backgroundColor
            : light.background.backgroundColor,
        },
        headerTintColor: isDarkMode ? dark.text.color : light.text.color,
      })}>
      <NewsStack.Screen
        name={myNavigation.main.news.name}
        component={News}
        options={{title: getLocaleValue('news')}}
      />
      <NewsStack.Screen
        name={myNavigation.main.news.details}
        component={NewsDetails}
        options={{title: getLocaleValue('details')}}
      />
    </NewsStack.Navigator>
  );
}
