import axios from 'axios';
import {myNetwork} from '../utils/constants';
import {getLocaleValue} from '../preferences/Locale';

const axiosInstance = axios.create({
  baseURL: myNetwork.baseURL,
  params: {
    api_token: myNetwork.apiToken,
    locale: getLocaleValue('locale'),
  },
});
export default axiosInstance;
