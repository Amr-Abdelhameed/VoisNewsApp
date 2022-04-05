import {useState, useEffect, useCallback} from 'react';
import axiosInstance from '../services/axiosInstant';

export function useGetData(route: string) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({isOccurred: false, message: ''});
  const [refetchCount, setRefetchCount] = useState(0);

  const getData = useCallback(
    async function () {
      setLoading(true);
      try {
        const _response = (await (await axiosInstance()).get(route)).data;
        setResponse(_response);
        setError({isOccurred: false, message: ''});
      } catch (_error) {
        setError({isOccurred: true, message: _error.message});
        setResponse(null);
      } finally {
        setLoading(false);
      }
    },
    [route],
  );

  useEffect(() => {
    getData();
  }, [getData, refetchCount]);

  function refetch() {
    setRefetchCount(prev => prev + 1);
  }

  return [response, loading, error, refetch];
}
