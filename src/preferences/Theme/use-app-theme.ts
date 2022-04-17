import {useAppSelector} from '../../utils/app-helper';

export function useAppTheme() {
  const colors = useAppSelector(state => state.theme.colors);
  const mode = useAppSelector(state => state.theme.mode);
  return {colors, mode};
}
