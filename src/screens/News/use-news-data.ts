import {status} from '../../utils/constants';
import {useAppSelector} from '../../utils/app-helper';

export function useNewsData() {
  const list = useAppSelector(state => state.news.list);
  const _status = useAppSelector(state => state.news.status);
  const errorMessage = useAppSelector(state => state.news.errorMessage);
  return {
    list,
    status: {
      isLoading: _status === status.idle || _status === status.pending,
      isResolved: _status === status.resolved,
      isRejected: _status === status.rejected,
    },
    errorMessage,
  };
}
