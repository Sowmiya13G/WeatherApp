import React, {useContext} from 'react';
import {View, Text, Switch, ImageBackground} from 'react-native';
import theme from '../../constants/theme';
import {styles} from './styles';
import commonImagePath from '../../constants/images';
import {ThemeContext} from '../../utils/themeContext';

const HomeScreen = () => {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  fontTheme = isDarkMode ? theme.fontColors.white : theme.fontColors.black;

  return (
    <ImageBackground
      source={isDarkMode ? commonImagePath.snow : commonImagePath.desert}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.toggleContainer}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={
              isDarkMode
                ? theme.backgroundColor.white
                : theme.backgroundColor.dark
            }
            trackColor={
              isDarkMode
                ? theme.backgroundColor.white
                : theme.backgroundColor.dark
            }
          />
        </View>
        {/* <Text style={{...styles.title, color: fontTheme}}>HOME SCREEN</Text> */}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
