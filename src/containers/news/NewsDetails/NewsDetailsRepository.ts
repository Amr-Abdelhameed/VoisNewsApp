import {useGetData} from '../../../hooks/useGetData';
import {myNetwork} from '../../../utils/constants';

export function useGetArticleById(uuid: string) {
  return useGetData(`${myNetwork.routes.byId}/${uuid}`);
}
