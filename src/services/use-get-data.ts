import {useState, useEffect} from 'react';
import axiosInstance from './axios-instant';
import {myNetwork} from '../utils/constants';
import {State} from './state';
import {useAppLanguage} from '../preferences/Locale/use-app-language';

export function useGetData(route: string) {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(State.idle);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRefresh, setIsRefresh] = useState(true);
  const [page, setPage] = useState(1);

  const {strings} = useAppLanguage();

  useEffect(() => {
    async function getData() {
      setStatus(State.pending);
      try {
        const params = {locale: strings.locale, page: page};

        const _response = (await axiosInstance.get(route, {params})).data;

        if (route == myNetwork.routes.top)
          if (page == 1) setResponse(_response.data);
          else setResponse(response.concat(_response.data));
        else setResponse(_response);

        setStatus(State.resolved);
      } catch (error) {
        setStatus(State.rejected);
        setErrorMessage(error.message);
      } finally {
        setIsRefresh(false);
      }
    }
    if (isRefresh) getData();
  }, [isRefresh, page]);

  const refetch = () => {
    setPage(1);
    setIsRefresh(true);
  };

  const loadMore = () => {
    setPage(page + 1);
    setIsRefresh(true);
  };

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
