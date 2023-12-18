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
  image: {
    flex: 1,
    opacity: 0.5,
  },
  title: {
    fontSize: theme.fontSizes.smallFont,
    color: theme.fontColors.white,
    marginBottom: '5%',
  },
  input: {
    height: hp('7%'),
    borderColor: 'gray',
    padding: '5%',
    width: wp('95%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  weatherContainer: {
    marginTop: '10%',
    padding: '5%',
    borderWidth: wp('1%'),
    borderRadius: wp('3%'),
    borderColor: theme.borderColor.white,
  },
  cartToggle: {
    flexDirection: 'row',
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.fontColors.black,
    marginLeft: 5,
  },
  header: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '1%',
  },
  title: {
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.white,
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '5%',
  },
  search: {
    alignSelf: 'flex-end',
    zIndex: 1,
    bottom: '5%',
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.fontColors.white,
    backgroundColor: theme.backgroundColor.white,
    padding: '3%',
    borderRadius: wp('8%'),
    margin: '3%',
    elevation: 5,
  },
  productImage: {
    width: wp('30%'),
    height: hp('15%'),
    resizeMode: 'cover',
    borderRadius: wp('1%'),
  },
  details: {
    display: 'flex',
    margin: '3%',
    width: '50%',
  },
  productTitle: {
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    color: theme.fontColors.black,
  },
  productPrice: {
    marginTop: 8,
    fontSize: theme.fontSizes.smallFontText,
    fontWeight: 'bold',
    color: theme.fontColors.orange,
    textAlign: 'center',
  },
  addToCartButton: {
    padding: '8%',
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: theme.fontColors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wishList: {
    alignSelf: 'flex-end',
    padding: wp('2%'),
  },
});
