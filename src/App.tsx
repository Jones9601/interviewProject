/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {color} from '@theme';
import {CoreIcon, CoreText} from './core-components';
import {useTranslation} from 'react-i18next';
import {svgImage, webpImage} from '@assets/images';

const App = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: color.defaultTheme.palette.white}}
      >
        <CoreText>{t('base')}</CoreText>
        <CoreIcon icon={svgImage} />
        <Image source={webpImage} style={{width: 80, height: 80}} />
      </View>
    </SafeAreaView>
  );
};

export default App;
