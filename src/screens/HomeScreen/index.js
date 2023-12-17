import React, {useState} from 'react';
import {View, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherRequestAction} from '../../redux/Action/action';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {weatherData, loading, error} = useSelector(state => state.weather);
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    dispatch(fetchWeatherRequestAction(cityName));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        value={cityName}
        onChangeText={text => setCityName(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : weatherData ? (
        <View>
          <Text>Temperature: {weatherData.main.temp}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default HomeScreen;
