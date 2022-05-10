import {status} from '../../utils/constants';
import {useAppSelector} from '../../utils/app-helper';

export function useNewsDetailsData() {
  const data = useAppSelector(state => state.article.data);
  const _status = useAppSelector(state => state.article.status);
  const errorMessage = useAppSelector(state => state.article.errorMessage);
  return {
    data,
    status: {
      isLoading: _status === status.idle || _status === status.pending,
      isResolved: _status === status.resolved,
      isRejected: _status === status.rejected,
    },
    errorMessage,
  };
}
