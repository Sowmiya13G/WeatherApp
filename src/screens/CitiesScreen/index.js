import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {
  getWeather,
  clearWeatherData,
  getCities,
} from '../../redux/Action/action';
import {ThemeContext} from '../../utils/themeContext';
import commonImagePath from '../../constants/images';
import theme from '../../constants/theme';

const CitiesScreen = () => {
  const [city, setCity] = useState('');
  console.log('city', city);
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.data);
  console.log('weatherData', weatherData);
  const citySuggestions = useSelector(state => state.weather.citySuggestions);
  console.log('citySuggestions', citySuggestions);

  const {isDarkMode} = useContext(ThemeContext);
  fontTheme = isDarkMode
    ? theme.fontColors.secondaryBlack
    : theme.fontColors.black;
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
    <ImageBackground
      source={isDarkMode ? commonImagePath.snow : commonImagePath.desert}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleGetWeather}>
          <Text style={{...styles.getWeather, color: fontTheme}}>
            Get Weather
          </Text>
        </TouchableOpacity>
        <SearchBar
          placeholder="Enter city name"
          placeholderTextColor={theme.fontColors.white}
          onChangeText={handleCityInputChange}
          value={city}
          // lightTheme={!isDarkMode}
          round
          style={{
            color: isDarkMode ? theme.fontColors.white : theme.fontColors.black,
          }}
          containerStyle={styles.input}
          inputContainerStyle={{backgroundColor: 'transparent'}}
          searchIcon={
            <Icon
              name="map-pin"
              type="font-awesome"
              color={
                isDarkMode ? theme.fontColors.white : theme.fontColors.black
              }
            />
          }
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

        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={{...styles.title, color: fontTheme}}>
              City: {weatherData.name}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Temperature: {weatherData.main.temp} °C
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Temperature: {weatherData.main.temp_min} °C
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Maximum Temperature: {weatherData.main.temp_max} °C
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Minimum Temperature: {weatherData.main.pressure}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Humidity: {weatherData.main.humidity}
            </Text>

            <Text style={{...styles.title, color: fontTheme}}>
              Description: {weatherData.weather[0].description}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              TimeZone: {weatherData.timezone}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Visibility: {weatherData.visibility}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Clouds: {weatherData.clouds.all}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Lat: {weatherData.coord.lat}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Lang: {weatherData.coord.lon}
            </Text>
            <Text style={{...styles.title, color: fontTheme}}>
              Wind Speed: {weatherData.wind.speed}
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default CitiesScreen;
