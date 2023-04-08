import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {Styles} from './CoreText.styles';

interface CoreTextProps {
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  numberOfLines?: number;
  onPress?: () => void;
}

const CoreText = (props: CoreTextProps) => {
  return (
    <Text
      testID={props.testID}
      style={[Styles.text, props.textStyle]}
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
};

export default CoreText;
