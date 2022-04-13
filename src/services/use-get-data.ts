import {useState, useEffect} from 'react';
import axiosInstance from './axios-instant';
import {myNetwork} from '../utils/constants';
import {State} from './state';

export function useGetData(route: string) {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(State.idle);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
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
      } catch (error) {
        setStatus(State.rejected);
        setErrorMessage(error.message);
      }
    }
    getData();
  }, [page]);

  const refetch = () => setPage(1);

  const loadMore = () => setPage(page + 1);

  return [
    response,
    {
      isLoading: status === State.idle || status === State.pending,
      isResolved: status === State.resolved,
      isRejected: status === State.rejected,
    },
    errorMessage,
    refetch,
    loadMore,
  ];
}
