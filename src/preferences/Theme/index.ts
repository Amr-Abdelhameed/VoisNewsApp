import {setData, getData} from '../LocalStorage';
import {myStorage} from '../../utils/constants';
import {Themes} from './themes';

export const setTheme = (value: string) => {
  setData(myStorage.theme, value);
};

export const getTheme = async () => {
  let theme = await getData(myStorage.theme);
  theme = theme != null ? theme : Themes.light;
  return theme;
};
