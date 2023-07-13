import axios from 'axios';

const defaultConfig = {
  headers: {
    Accept: 'application/json',
  },
};

const instance = axios.create(defaultConfig);
export default instance;
