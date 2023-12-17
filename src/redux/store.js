import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux';
import weatherReducer from './Reducer/reducer';
import rootSaga from './Sagas/sagas';

const rootReducer = combineReducers({
  weather: weatherReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
