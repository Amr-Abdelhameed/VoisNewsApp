import {useState, useEffect, useCallback} from 'react';
import axiosInstance from '../services/axiosInstant';
import {myNetwork} from '../utils/constants';

export function useGetData(route: string) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({isOccurred: false, message: ''});
  const [page, setPage] = useState(1);

  const getData = useCallback(
    async function () {
      setLoading(true);
      try {
        const _response = (
          await axiosInstance.get(route, {params: {page: page}})
        ).data;

        if (route == myNetwork.routes.top)
          if (page == 1) setResponse(_response.data);
          else setResponse(response.concat(_response.data));
        else setResponse(_response);

        setError({isOccurred: false, message: ''});
      } catch (_error) {
        setError({isOccurred: true, message: _error.message});
        setResponse(null);
      } finally {
        setLoading(false);
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

  return [response, loading, error, refetch, loadMore];
}
