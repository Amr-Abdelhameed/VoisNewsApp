import axios from 'axios';
import {myNetwork} from '../utils/constants';

const axiosInstance = axios.create({
  baseURL: myNetwork.baseURL,
  params: {
    api_token: myNetwork.apiToken,
  },
});
export default axiosInstance;
