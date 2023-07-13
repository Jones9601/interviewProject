import React from 'react';
import {View} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';
import {Styles} from './Hoc.styles';

export const navigationRef = createNavigationContainerRef<any>();

const Hoc = ({children}: {children: any}) => {
  return <View style={Styles.container}>{children}</View>;
};

export default Hoc;
