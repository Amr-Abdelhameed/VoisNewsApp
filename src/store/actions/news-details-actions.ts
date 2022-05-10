import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '..';
import axiosInstance from '../../services/axios-instant';
import {status} from '../../utils/constants';
import {setStatus, setData, setErrorMessage} from '../news-details-slice';

export const fetchArticleById =
  (
    route: string,
    uuid: number,
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    const getData = async () => {
      dispatch(setStatus(status.pending));
      try {
        const response = (await axiosInstance.get(`${route}/${uuid}`)).data;

        dispatch(setData(response));

        dispatch(setStatus(status.resolved));
      } catch (error) {
        dispatch(setStatus(status.rejected));
        dispatch(setErrorMessage(error.message));
      }
    };

    await getData();
  };
