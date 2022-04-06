import axios from 'axios';
import {myNetwork} from '../utils/constants';
import {getLanguage} from '../utils/Locale';

const axiosInstance = async () => {
  let _language = await getLanguage();

  return axios.create({
    baseURL: myNetwork.baseURL,
    params: {
      api_token: myNetwork.apiToken,
      locale: _language,
    },
  });
};

export default axiosInstance;
