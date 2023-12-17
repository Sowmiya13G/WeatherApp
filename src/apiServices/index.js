import {ApiEndpoints} from './apiEndPoints';
import {MicroService} from './microServices';

export const checkApiStatus = async () => {
  try {
    const apiConfigs = {
      url: ApiEndpoints.YOUR_ENDPOINT,
      payload: {},
    };

    const api = APIInstance(apiConfigs);

    const response = await api.get(MicroService.WEATHER);

    console.log('API Status:', response.status);
  } catch (error) {
    console.error('Error checking API status:', error);
  }
};
