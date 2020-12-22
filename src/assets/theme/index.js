import { configureFonts, DefaultTheme } from 'react-native-paper';
import { _responsive } from '../../components/style_helpers';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'tinderclone',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'tinderclone',
      fontWeight: '500',
    },
    cursiveBold: {
      fontFamily: 'tinderclone',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'tinderclone',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'tinderclone',
      fontWeight: '100',
    },
  },
};

fontConfig.ios = fontConfig.default;

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: '#FFFFFF',
    primary: '#6bc644',
    secondary: '#fc1414',
    error: '#fc1414',
    buttonBorder: '#D5D5D5',
  },
};

export const Theme = {
  roundness: 8,
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    primary: '#6bc644',
    secondary: '#fc1414',
    accent: '#F16277',
    pink: '#FFD0D7',
    hotpink: '#DB405D',
    blue: '#154075',
    background: '#FFFFFF',
    surface: '#F7F9FF',
    buttonBorder: '#D5D5D5',
    notification: '#f50057',
    text: '#333333',
    white: '#FFFFFF',
    black: '#35343D',
    yellow: '#FBDB4A',
    _1: '#4F4F4F',
    _2: '#535353',
    _3: '#F7F9FF', // whitesmoke
    _4: '#F15887',
    _5: '#6B6B6B',
    _6: '#F0A6BD',
    _7: '#CDEBFF',
    _8: '#DEFFC5',
    _9: '#cccccc',
    shadow: 'rgba(0,0,0,.16)',
    coloredShadow: 'rgba(227, 61, 86, 0.2)',
  },
  responsive: _responsive,
  gutter: {
    sm: 10,
    md: 25,
    lg: 40,
    statusBar: _responsive([20, 50]),
    padded: _responsive([15, 30]),
  },
};
