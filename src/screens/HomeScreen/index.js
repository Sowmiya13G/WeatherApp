import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Switch} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {
  getWeather,
  clearWeatherData,
  getCities,
} from '../../redux/Action/action';
import {ThemeContext} from '../../utils/themeContext';
import theme from '../../constants/theme';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  console.log('city', city);
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.data);
  console.log('weatherData', weatherData);
  const citySuggestions = useSelector(state => state.weather.citySuggestions);
  console.log('citySuggestions', citySuggestions);

  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  const handleGetWeather = () => {
    dispatch(getWeather(city));
  };

  const handleCitySelect = selectedCity => {
    setCity(selectedCity);
    dispatch(clearWeatherData());
    dispatch(getWeather(selectedCity));
  };

  const handleCityInputChange = text => {
    setCity(text);
    dispatch(getCities(text));
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.toggleContainer}>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
      <SearchBar
        placeholder="Enter city name"
        onChangeText={handleCityInputChange}
        value={city}
        lightTheme={!isDarkMode}
        round
        containerStyle={styles.input}
        inputContainerStyle={{backgroundColor: 'transparent'}}
        searchIcon={<Icon name="search" type="font-awesome" color="#000" />}
        // clearIcon={<Icon name="times" type="font-awesome" color="#000" />}
      />

      {citySuggestions && citySuggestions.length > 0 && (
        <View style={styles.productContainer}>
          <FlatList
            data={citySuggestions}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleCitySelect(item.name)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={handleGetWeather}
        style={styles.addToCartButton}>
        <Text>Get Weather</Text>
      </TouchableOpacity>
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.title}>City: {weatherData.name}</Text>
          <Text style={styles.title}>
            Temperature: {weatherData.main.temp} °C
          </Text>
          <Text style={styles.title}>
            Temperature: {weatherData.main.temp_min} °C
          </Text>
          <Text style={styles.title}>
            Maximum Temperature: {weatherData.main.temp_max} °C
          </Text>
          <Text style={styles.title}>
            Minimum Temperature: {weatherData.main.pressure}
          </Text>
          <Text style={styles.title}>
            Humidity: {weatherData.main.humidity}
          </Text>

          <Text style={styles.title}>
            Description: {weatherData.weather[0].description}
          </Text>
          <Text style={styles.title}>TimeZone: {weatherData.timezone}</Text>
          <Text style={styles.title}>Visibility: {weatherData.visibility}</Text>
          <Text style={styles.title}>Clouds: {weatherData.clouds.all}</Text>
          <Text style={styles.title}>Lat: {weatherData.coord.lat}</Text>
          <Text style={styles.title}>Lang: {weatherData.coord.lon}</Text>
          <Text style={styles.title}>Wind Speed: {weatherData.wind.speed}</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
