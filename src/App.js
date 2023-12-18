import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from './utils/themeContext';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

// import {WEATHER_URL, API_KEY} from './apiServices/microServices';
// import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';
// import {SearchBar} from 'react-native-elements';
// import axios from 'axios';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const getWeatherData = async () => {
//     try {
//       const response = await axios.get(
//         `${WEATHER_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`,
//       );
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <SearchBar
//         placeholder="Enter city name"
//         onChangeText={text => setCity(text)}
//         value={city}
//         // lightTheme
//         round
//         containerStyle={{width: '80%'}}
//       />
//       <Button title="Get Weather" onPress={getWeatherData} />
//       {weatherData && (
//         <View>
//           <Text>City: {weatherData.name}</Text>
//           <Text>Temperature: {weatherData.main.temp} °C</Text>
//           <Text>Description: {weatherData.weather[0].description}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default App;
