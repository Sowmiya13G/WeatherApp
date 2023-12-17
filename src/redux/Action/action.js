import * as ActionTypes from '../actionTypes';

// export const fetchWeatherAction = () => ({
//   type: ActionTypes.fetchWeather,
// });

export const fetchWeatherRequestAction = cityName => ({
  type: ActionTypes.fetchWeatherRequest,
  payload: cityName,
});

export const fetchWeatherSuccessAction = weatherData => ({
  type: ActionTypes.fetchWeatherSuccess,
  payload: {weatherData},
});

export const fetchWeatherFailureAction = error => ({
  type: ActionTypes.fetchWeatherFailure,
  payload: {error},
});

export const getWeather = city => ({
  type: ActionTypes.getWeather,
  payload: city,
});

export const clearWeatherData = () => ({
  type: ActionTypes.clearWeatherData,
});

export const getCities = query => ({
  type: ActionTypes.getCities,
  payload: query,
});
