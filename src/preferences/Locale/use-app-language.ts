import {useContext} from 'react';
import LanguageContext from '../../store/language-context';
import en from './en';
import de from './de';
import {Languages} from './languages';

export function useAppLanguage() {
  const {appLanguage} = useContext(LanguageContext);
  return Object.freeze({strings: appLanguage == Languages.en ? en : de});
}
