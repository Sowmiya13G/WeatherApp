import * as ActionTypes from '../actionTypes';

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionTypes.fetchWeather:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    case ActionTypes.fetchWeatherRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.fetchWeatherSuccess:
      return {
        ...state,
        loading: false,
        weatherData: action.payload.weatherData,
      };
    case ActionTypes.fetchWeatherFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default weatherReducer;
