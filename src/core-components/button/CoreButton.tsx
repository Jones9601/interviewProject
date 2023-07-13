import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Styles} from './CoreButton.styles';
import {CoreText} from '../index';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonProps {
  buttonLabel: string;
  onPress: () => void;
  buttonType?: ButtonType;
  disabled?: boolean;
  buttonBodyStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CoreButton = ({
  buttonLabel,
  buttonType = ButtonType.PRIMARY,
  disabled,
  onPress,
  buttonBodyStyle,
  textStyle,
}: ButtonProps) => {
  const getStyleByType = () => {
    const primaryStyle = disabled
      ? Styles.disabledPrimaryButton
      : Styles.primaryButton;
    const secondaryStyle = disabled
      ? Styles.disabledSecondaryButton
      : Styles.secondaryButton;
    return [
      Styles.buttonContainer,
      buttonType === ButtonType.PRIMARY
        ? disabled
          ? Styles.disabledPrimaryButton
          : Styles.primaryButton
        : disabled
        ? Styles.disabledSecondaryButton
        : Styles.secondaryButton,
      buttonType === ButtonType.PRIMARY ? primaryStyle : secondaryStyle,
      buttonBodyStyle,
    ];
  };

  const getTextStyleByType = () => {
    const primaryStyle = disabled
      ? Styles.disabledPrimaryText
      : Styles.primaryText;
    const secondaryStyle = disabled
      ? Styles.disableSecondaryText
      : Styles.secondaryText;
    return [
      Styles.buttonText,
      buttonType === ButtonType.PRIMARY
        ? disabled
          ? Styles.disabledPrimaryText
          : Styles.primaryText
        : disabled
        ? Styles.disableSecondaryText
        : Styles.secondaryText,
      buttonType === ButtonType.PRIMARY ? primaryStyle : secondaryStyle,
      textStyle,
    ];
  };

  return (
    <TouchableOpacity
      style={getStyleByType()}
      onPress={onPress}
      disabled={disabled}
    >
      <CoreText textStyle={getTextStyleByType()}>{buttonLabel}</CoreText>
    </TouchableOpacity>
  );
};

export default CoreButton;
