import {windowHeight, windowWidth} from '@src/core-constants';
import {PixelRatio} from 'react-native';

export const hs = (value: number) => {
  const size = ((value / 411) * 100).toFixed(2) + '%';
  const elemWidth = Number.parseFloat(size);
  return PixelRatio.roundToNearestPixel((windowWidth * elemWidth) / 100);
};

export const fs = (size: number) => {
  const shortDimension =
    windowWidth < windowHeight ? windowWidth : windowHeight;
  return (shortDimension / 350) * (size - 2);
};

export const vs = (value: number) => {
  const size = ((value / 823) * 100).toFixed(2) + '%';
  const elemHeight = Number.parseFloat(size);
  return PixelRatio.roundToNearestPixel((windowHeight * elemHeight) / 100);
};

export const wp = (widthPercent: number | string) => {
  const elemWidth =
    typeof widthPercent === 'number'
      ? widthPercent
      : Number.parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((windowWidth * elemWidth) / 100);
};
