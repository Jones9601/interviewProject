import {color} from '@src/theme/color';
import {fs} from '@src/utils';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  text: {
    color: color.defaultTheme.palette.black,
    fontSize: fs(16),
    // fontFamily: ,
  },
});
