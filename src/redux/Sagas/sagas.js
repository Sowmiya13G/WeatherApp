import {takeLatest, put, call} from 'redux-saga/effects';
import * as ActionTypes from '../actionTypes';
import APIKit from '../../apiServices/index';
import {
  fetchWeatherFailureAction,
  fetchWeatherSuccessAction,
} from '../Action/action';

function* fetchWeatherSaga(action) {
  try {
    console.log('fetchWeatherSaga triggered with action:', action);
    const {cityName} = action.payload;
    const response = yield call(APIKit.get, `/weather?q=${cityName}`);
    console.log('response', response);
    yield put(fetchWeatherSuccessAction(response.data));
  } catch (error) {
    console.error('fetchWeatherSaga error:', error);
    yield put(fetchWeatherFailureAction(error));
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.fetchWeatherRequest, fetchWeatherSaga);
}

export default rootSaga;
