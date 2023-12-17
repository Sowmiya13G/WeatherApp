// import {takeLatest, put, call} from 'redux-saga/effects';
// import * as ActionTypes from '../actionTypes';
// import APIKit from '../../apiServices/index';
// import {
//   fetchWeatherFailureAction,
//   fetchWeatherSuccessAction,
// } from '../Action/action';

// function* fetchWeatherSaga(action) {
//   try {
//     console.log('fetchWeatherSaga triggered with action:', action);
//     const {cityName} = action.payload;
//     const response = yield call(APIKit.get, `/weather?q=${cityName}`);
//     console.log('response', response);
//     yield put(fetchWeatherSuccessAction(response.data));
//   } catch (error) {
//     console.error('fetchWeatherSaga error:', error);
//     yield put(fetchWeatherFailureAction(error));
//   }
// }

// function* rootSaga() {
//   yield takeLatest(ActionTypes.fetchWeatherRequest, fetchWeatherSaga);
// }

// export default rootSaga;

import {put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import * as ActionTypes from '../actionTypes';
import {WEATHER_URL, API_KEY} from '../../apiServices/microServices';

function* getWeather(action) {
  try {
    yield put({type: ActionTypes.getWeatherRequest});
    const response = yield call(
      axios.get,
      `${WEATHER_URL}/weather?q=${action.payload}&appid=${API_KEY}&units=metric`,
    );
    yield put({type: ActionTypes.getWeatherSuccess, payload: response.data});
  } catch (error) {
    yield put({type: ActionTypes.getWeatherFailure, payload: error.message});
  }
}
function* getCities(action) {
  try {
    const response = yield call(
      axios.get,
      `${WEATHER_URL}/find?q=${action.payload}&appid=${API_KEY}`,
    );
    const citySuggestions = response.data.list.map(city => ({
      id: city.id,
      name: city.name,
    }));
    yield put({type: ActionTypes.getCitiesSuccess, payload: citySuggestions});
  } catch (error) {
    yield put({type: ActionTypes.getCitiesFailure, payload: error.message});
  }
}

function* weatherSaga() {
  yield takeLatest(ActionTypes.getWeather, getWeather);
  yield takeLatest(ActionTypes.getCities, getCities);
}

export default weatherSaga;
