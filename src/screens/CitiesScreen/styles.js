import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.white,
    marginBottom: '5%',
  },
  text: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.white,
  },
  getWeather: {
    fontSize: theme.fontSizes.bigFont,
    color: theme.fontColors.white,
    marginTop: '5%',
    left: '5%',
  },
  input: {
    height: hp('7%'),
    borderColor: 'transparent',
    padding: '5%',
    width: wp('95%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignSelf: 'center',
    top: '5%',
  },
  image: {
    flex: 1,
    opacity: 0.5,
  },
  weatherContainer: {
    marginTop: '10%',
    padding: '5%',
  },
});
