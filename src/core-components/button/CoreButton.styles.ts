import {StyleSheet} from 'react-native';
import {fs, vs} from '@src/utils';
import {color} from '@src/theme';

export const Styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: color.defaultTheme.palette.primaryRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: vs(16),
  },
  primaryButton: {
    backgroundColor: color.defaultTheme.palette.primaryRed,
    borderColor: color.defaultTheme.palette.primaryRed,
  },
  secondaryButton: {
    borderColor: color.defaultTheme.palette.primaryRed,
    backgroundColor: color.defaultTheme.palette.white,
  },
  disabledPrimaryButton: {
    backgroundColor: color.defaultTheme.palette.primaryGray,
    borderColor: color.defaultTheme.palette.primaryGray,
  },
  disabledSecondaryButton: {
    backgroundColor: color.defaultTheme.palette.primaryGray,
    borderColor: color.defaultTheme.palette.primaryGray,
  },
  text: {
    fontSize: fs(20),
    textAlign: 'center',
    color: color.defaultTheme.palette.secondaryTextColor,
  },
  buttonText: {
    fontSize: fs(18),
    textAlign: 'center',
    paddingBottom: vs(2),
    color: color.defaultTheme.palette.white,
  },
  primaryText: {
    color: color.defaultTheme.palette.white,
    fontSize: fs(20),
    textAlign: 'center',
  },
  secondaryText: {
    color: color.defaultTheme.palette.primaryRed,
    fontSize: fs(18),
    textAlign: 'center',
  },
  disabledPrimaryText: {
    color: color.defaultTheme.palette.secondaryTextColor,
  },
  disableSecondaryText: {
    color: color.defaultTheme.palette.secondaryTextColor,
    fontSize: fs(20),
    textAlign: 'center',
  },
});
