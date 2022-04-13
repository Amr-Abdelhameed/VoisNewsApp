import {setData, getData} from '../LocalStorage';
import {myStorage} from '../../utils/constants';
import {Themes} from './themes';

export const setTheme = (value: string) => {
  setData(myStorage.themeMode, value);
};

export const getTheme = async () => {
  let themeMode = await getData(myStorage.themeMode);
  themeMode = themeMode != null ? themeMode : Themes.light;
  return themeMode;
};
