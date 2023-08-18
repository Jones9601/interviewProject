/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Styles} from './core-components/hoc/Hoc.styles';
import {Root} from './navigation';
import {Hoc, ProgressLoader} from './core-components';
import {stores} from './core-stores';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  useEffect(() => {
    (async () => {
      await Promise.all([
        crashlytics().setUserId('101'),
        crashlytics().setAttribute('credits', String(50)),
        crashlytics().setAttributes({
          user_id: 'jones',
        }),
      ]);
    })();
  }, []);

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
