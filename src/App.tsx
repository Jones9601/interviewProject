/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Styles} from './core-components/hoc/Hoc.styles';
import {Root} from './navigation';
import {Hoc, ProgressLoader} from './core-components';
import {stores} from './core-stores';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Hoc>
        <Root />
      </Hoc>
      {stores.loading && <ProgressLoader title={stores.getLoaderTitle} />}
    </SafeAreaView>
  );
};

export default App;
