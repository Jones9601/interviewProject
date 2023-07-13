import {StyleSheet, Platform} from 'react-native';
import {color} from '../../theme';

export const Styles = StyleSheet.create({
  outerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: color.defaultTheme.palette.white,
    alignSelf: 'center',
    borderRadius: 24,
    marginHorizontal: 92,
  },
  text: {
    textAlign: 'center',
    color: color.defaultTheme.palette.black,
    fontSize: 12,
  },
  innerWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  lottieWrapper: {
    height: Platform.OS === 'ios' ? 38 : 100,
    width: Platform.OS === 'ios' ? 38 : 100,
  },
  lottieView: {
    width: '100%',
    height: '100%',
  },
  gifImage: {
    width: 61,
    height: 61,
  },
});
