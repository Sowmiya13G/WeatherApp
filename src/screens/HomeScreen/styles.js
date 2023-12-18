import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  title: {
    fontSize: theme.fontSizes.smallFont,
    marginBottom: '5%',
  },
  image: {
    flex: 1,
    opacity: 0.5,
  },
  toggleContainer: {
    bottom: '25%',
    right: '10%',
    position: 'absolute',
  },
});
