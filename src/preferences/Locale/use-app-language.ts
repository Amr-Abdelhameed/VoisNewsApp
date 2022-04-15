import {useAppSelector} from '../../utils/Hooks';

export function useAppLanguage() {
  const strings = useAppSelector(state => state.language.strings);
  return {strings};
}
