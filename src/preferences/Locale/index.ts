import {setData, getData} from '../LocalStorage';
import {myStorage} from '../../utils/constants';
import {Languages} from './languages';

export const setLanguage = (value: string) => {
  setData(myStorage.langauge, value);
};

export const getLanguage = async () => {
  const language = await getData(myStorage.langauge);
  const myLocale = language != null ? language : Languages.en;
  return myLocale;
};
