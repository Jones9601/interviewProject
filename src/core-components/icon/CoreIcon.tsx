import React from 'react';
import {SvgXml} from 'react-native-svg';

interface IconProps {
  icon: string;
  height?: number | string;
  width?: number | string;
  testID?: string;
  preserveAspectRatio?: string;
}

const CoreIcon = (props: IconProps) => {
  return (
    <SvgXml
      testID={props.testID ?? ''}
      width={props.width ?? 20}
      height={props.height ?? 20}
      xml={props.icon}
      preserveAspectRatio={props.preserveAspectRatio}
    />
  );
};

export default CoreIcon;
