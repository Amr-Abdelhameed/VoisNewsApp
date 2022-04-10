import {setData, getData} from '../LocalStorage';
import {myStorage} from '../../utils/constants';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

export const setThemeMode = (value: string) => {
  setData(myStorage.themeMode, value);
};

export const getThemeMode = () => {
  return getData(myStorage.themeMode);
};
