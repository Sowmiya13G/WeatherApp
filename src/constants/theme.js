import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenHeight = hp('100%');
const screenWidth = wp('100%');

const backgroundColor = {
  darkBackground: '#121212',
  white: '#FFFFFF',
  black: '#000000',
  secondaryBlack: '#292929',
  primary: '#FAFAFA',
  gray: '#CCCCCC',
  lightGray: '#E5E4E2',
  orange: '#E47718',
  green: '#008000',
  red: '#FF0000',
  lightCoral: '#F08080',
  mediumAquamarine: '#66CDAA',
  gradientGreen: '#37ECBA',
  gradientBlue: '#72AFD3',
  yellowishBrown: '#C6AB59',
  oliveGreen: '#B29950',
  saddleBrown: '#9E8847',
  status: '#37ECBA',
  saddleBrown2: '#786017',
  saddleBrown3: '#6b5514',
  saddleBrown4: '#50400f',
  saddleBrown5: '#43350d',
};

const borderColor = {
  white: '#FFFFFF',
  black: '#000000',
};
const fontSizes = {
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1.5%'),
  bigFontText: hp('3.5%'),
  mediumFontText: hp('2.5%'),
  smallFontText: hp('1.8%'),
};

const fontColors = {
  secondaryBlack: '#292929',
  inkBlack: '#252A31',
  inkLight: '#697D95',
  inkDark: '#252A31',
  orange: '#E47718',
  white: '#FFFFFF',
  green: '#008000',
  black: '#000000',
  candyBlue: '#37ECBA',
};
const light = {
  theme: {
    background: '#ededed',
    border: '#bdbdbd',
    backgroundAlt: '#eaeaeb',
    borderAlt: '#bdbdbd',
    text: '#171717',
  },
};
const dark = {
  theme: {
    background: '#2E3440',
    border: '#575c66',
    backgroundAlt: '#575c66',
    borderAlt: '#2E3440',
    text: '#ECEFF4',
  },
};
export default {
  fontSizes,
  fontColors,
  screenHeight,
  screenWidth,
  backgroundColor,
  borderColor,
  light,
  dark,
};
