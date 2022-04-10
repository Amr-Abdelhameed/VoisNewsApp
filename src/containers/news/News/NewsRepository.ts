import {useGetData} from '../../../hooks/useGetData';
import {myNetwork} from '../../../utils/constants';

export function useGetNews() {
  return useGetData(myNetwork.routes.top);
}
