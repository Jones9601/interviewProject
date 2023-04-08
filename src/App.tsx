/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {color} from '@theme';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: color.defaultTheme.palette.black}}
      ></View>
    </SafeAreaView>
  );
};

export default App;
