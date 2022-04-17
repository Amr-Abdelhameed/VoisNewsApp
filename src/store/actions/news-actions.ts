import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '..';
import axiosInstance from '../../services/axios-instant';
import {State} from '../../services/state';
import {setStatus, setList, appendList, setErrorMessage} from '../news-slice';

export const fetchNews =
  (
    route: string,
    page: number,
    locale: string,
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    const getData = async () => {
      dispatch(setStatus(State.pending));
      try {
        const response = (
          await axiosInstance.get(route, {params: {locale, page}})
        ).data;

        if (page == 1) dispatch(setList(response.data));
        else dispatch(appendList(response.data));

        dispatch(setStatus(State.resolved));
      } catch (error) {
        dispatch(setStatus(State.rejected));
        dispatch(setErrorMessage(error.message));
      }
    };

    await getData();
  };
