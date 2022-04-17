import {State} from '../../services/state';
import {useAppSelector} from '../../utils/app-helper';

export function useNewsDetailsData() {
  const data = useAppSelector(state => state.article.data);
  const status = useAppSelector(state => state.article.status);
  const errorMessage = useAppSelector(state => state.article.errorMessage);
  return {
    data,
    status: {
      isLoading: status === State.idle || status === State.pending,
      isResolved: status === State.resolved,
      isRejected: status === State.rejected,
    },
    errorMessage,
  };
}
