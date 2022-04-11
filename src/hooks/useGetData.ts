import {useState, useEffect, useCallback} from 'react';
import axiosInstance from '../services/axiosInstant';
import {myNetwork} from '../utils/constants';

export enum State {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

export function useGetData(route: string) {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(State.idle);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);

  const getData = useCallback(
    async function () {
      setStatus(State.pending);
      try {
        const _response = (
          await axiosInstance.get(route, {params: {page: page}})
        ).data;

        if (route == myNetwork.routes.top)
          if (page == 1) setResponse(_response.data);
          else setResponse(response.concat(_response.data));
        else setResponse(_response);

        setStatus(State.resolved);
      } catch (_error) {
        setStatus(State.rejected);
        setErrorMessage(_error.message);
      }
    },
    [page],
  );

  useEffect(() => {
    getData();
  }, [getData]);

  function refetch() {
    setPage(1);
  }

  function loadMore() {
    setPage(page + 1);
  }

  const isLoading = status === State.idle || status === State.pending,
    isResolved = status === State.resolved,
    isRejected = status === State.rejected;

  return [
    response,
    {isLoading, isResolved, isRejected},
    errorMessage,
    refetch,
    loadMore,
  ];
}
