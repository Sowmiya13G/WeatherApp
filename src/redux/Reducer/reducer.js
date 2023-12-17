import * as ActionTypes from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
  citySuggestions: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getWeatherRequest:
      return {...state, loading: true, error: null};

    case ActionTypes.getWeatherSuccess:
      return {...state, loading: false, data: action.payload};

    case ActionTypes.getWeatherFailure:
      return {...state, loading: false, error: action.payload};

    case ActionTypes.clearWeatherData:
      return {...state, data: null, error: null};

    case ActionTypes.getWeatherSuccess:
      return {...state, citySuggestions: action.payload};

    case ActionTypes.getWeatherFailure:
      return {...state, citySuggestions: []};

    default:
      return state;
  }
};

export default weatherReducer;

// weatherData: null,
// case ActionTypes.fetchWeather:
//   return {
//     ...state,
//     loading: true,
//     error: null,
//   };
// case ActionTypes.fetchWeatherRequest:
//   return {
//     ...state,
//     loading: true,
//     error: null,
//   };
// case ActionTypes.fetchWeatherSuccess:
//   return {
//     ...state,
//     loading: false,
//     weatherData: action.payload.weatherData,
//   };
// case ActionTypes.fetchWeatherFailure:
//   return {
//     ...state,
//     loading: false,
//     error: action.payload.error,
//   };
