import {State} from '../../services/state';
import {useAppSelector} from '../../utils/Hooks';

export function useNewsData() {
  const list = useAppSelector(state => state.news.list);
  const status = useAppSelector(state => state.news.status);
  const errorMessage = useAppSelector(state => state.news.errorMessage);
  return {
    list,
    status: {
      isLoading: status === State.idle || status === State.pending,
      isResolved: status === State.resolved,
      isRejected: status === State.rejected,
    },
    errorMessage,
  };
}
