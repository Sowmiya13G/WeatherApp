import React from 'react';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
