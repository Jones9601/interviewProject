import React from 'react';
import {
  Image,
  Modal,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Styles} from './ProgressLoader.styles';

import {CoreText} from '../index';
import {loader} from '@assets/loaders';

interface ProgressBarProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ProgressLoader = (props: ProgressBarProps) => {
  const {title} = props;

  return (
    <Modal animationType={'fade'} transparent={true}>
      <View style={Styles.outerWrapper}>
        <View style={[Styles.container, props.containerStyle]}>
          <View style={Styles.innerWrapper}>
            <Image style={Styles.gifImage} source={loader} />
            {title && (
              <CoreText textStyle={[Styles.text, props.textStyle]}>
                {title}
              </CoreText>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProgressLoader;
