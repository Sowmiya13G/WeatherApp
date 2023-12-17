import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const HomeScreen = () => {
  const [cityName, setCityName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        value={cityName}
        onChangeText={text => setCityName(text)}
      />
      <Button title="Search" />
    </View>
  );
};

export default HomeScreen;
