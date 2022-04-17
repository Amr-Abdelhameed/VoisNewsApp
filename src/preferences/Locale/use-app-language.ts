import {useAppSelector} from '../../utils/app-helper';

export function useAppLanguage() {
  const strings = useAppSelector(state => state.language.strings);
  return {strings};
}
