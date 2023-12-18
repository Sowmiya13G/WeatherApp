import React, {useContext} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import commonImagePath from '../../constants/images';
import {styles} from './styles';
import theme from '../../constants/theme';
import {ThemeContext} from '../../utils/themeContext';

const QuotesScreen = () => {
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <ImageBackground
      source={isDarkMode ? commonImagePath.snow : commonImagePath.desert}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>QuotesScreen</Text>
      </View>
    </ImageBackground>
  );
};

export default QuotesScreen;
