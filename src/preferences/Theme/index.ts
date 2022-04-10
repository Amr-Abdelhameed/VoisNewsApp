import {setData, getData} from '../LocalStorage';
import {myStorage} from '../../utils/constants';
import dark from './dark';
import light from './light';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

export const setTheme = (value: string) => {
  setData(myStorage.themeMode, value);
};

export const getTheme = async () => {
  let themeMode = await getData(myStorage.themeMode);
  themeMode = themeMode != null ? themeMode : Themes.light;
  return themeMode;
};

export const text = (themeMode: string) => {
  return themeMode == Themes.dark ? dark.text : light.text;
};

export const background = (themeMode: string) => {
  return themeMode == Themes.dark ? dark.background : light.background;
};

export const card = (themeMode: string) => {
  return themeMode == Themes.dark ? dark.card : light.card;
};

export const btn = (themeMode: string) => {
  return themeMode == Themes.dark ? dark.btn : light.btn;
};

export const btnText = (themeMode: string) => {
  return themeMode == Themes.dark ? dark.btnText : light.btnText;
};

export const tabBarActiveTintColor = (themeMode: string) => {
  return themeMode == Themes.dark
    ? dark.tabBarActiveTintColor
    : light.tabBarActiveTintColor;
};

export const tabBarInactiveTintColor = (themeMode: string) => {
  return themeMode == Themes.dark
    ? dark.tabBarInactiveTintColor
    : light.tabBarInactiveTintColor;
};

export const placeHolderColor = (themeMode: string) => {
  return themeMode == Themes.dark
    ? dark.placeHolderColor
    : light.placeHolderColor;
};

export const placeHolderIconColor = (themeMode: string) => {
  return themeMode == Themes.dark
    ? dark.placeHolderIconColor
    : light.placeHolderIconColor;
};
