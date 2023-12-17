import axios from 'axios';
import {MicroService} from './microServices';
const APIKit = axios.create({
  baseURL: MicroService,
  timeout: 30000,
});
const responseHandler = response => {
  if (response.status === 401) {
    return Promise.reject(response);
  }
  return response;
};

const errorHandler = async error => {
  if (error.toJSON().message === 'Network Error') {
    console.error('Network Error:', error);
  }

  if (error.response && error.response.status === 401) {
    console.error('Unauthorized:', error);
  }

  return Promise.reject(error);
};

APIKit.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

APIKit.interceptors.response.use(responseHandler, errorHandler);

export default APIKit;
