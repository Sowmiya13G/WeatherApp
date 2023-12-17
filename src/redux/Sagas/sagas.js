import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import checkApiStatus from '../../apiServices/index';
import * as ActionTypes from '../actionTypes';
import {fetchWeatherSuccess, fetchWeatherFailure} from '../actionTypes';

function* fetchWeatherSaga(action) {
  try {
    const {cityName} = action.payload;
    const response = yield call(checkApiStatus().get, `/weather?q=${cityName}`);

    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.fetchWeather, fetchWeatherSaga);
}

export default rootSaga;
