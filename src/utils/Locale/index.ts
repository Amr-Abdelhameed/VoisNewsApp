import {setData, getData} from '../LocalStorage';
import I18n from 'react-native-i18n';
import en from './en';
import de from './de';
import {myLocalization, myStorage} from '../constants';

I18n.fallbacks = true;
I18n.translations = {en, de};

export function setLocale(locale: string) {
  if (locale == 'us') locale = 'en';
  I18n.locale = locale;
}

export function getLocaleValue(key: string) {
  return I18n.t(key);
}

export const setLanguage = (value: string) => {
  setData(myStorage.langauge, value);
};

export const getLanguage = async () => {
  const language = await getData(myStorage.langauge);
  const myLocale = language != null ? language : myLocalization.defaultLocale;
  return myLocale;
};
