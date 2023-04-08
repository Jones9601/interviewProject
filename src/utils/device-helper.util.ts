import {Dimensions, Platform} from 'react-native';

export const DeviceHelper = {
  isIos(): boolean {
    return Platform.OS === 'ios';
  },

  isAndroid(): boolean {
    return Platform.OS === 'android';
  },

  getHeight(): number {
    return Dimensions.get('window').height;
  },

  getWidth(): number {
    return Dimensions.get('window').width;
  },
};
