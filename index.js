/* eslint-disable no-console */
import React, {useMemo, useEffect, useState} from 'react';
import {AppRegistry, Platform, View} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from '@theme';
import {I18nextProvider} from 'react-i18next';
import i18n, {EN, translate} from '@i18n';
import {observer} from 'mobx-react-lite';
import {CoreText} from '@src/core-components';
import Config from 'react-native-config';

// Hi Devs, Comment Below 3 lines to see logs
// console.log = () => {};
// console.error = () => {};
// console.warn = () => {};

const Screen = observer(() => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    (async () => {
      translate.init({en: EN});
      setTimeout(() => {
        console.log('======>', Platform.OS, Config.GOOGLE_MAPS_API_KEY);
        setShowSplash(false);
      }, 2000);
    })();
  });

  const memoizedComponent = useMemo(() => {
    return (
      <>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            {showSplash ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CoreText>{'Loading..'}</CoreText>
              </View>
            ) : (
              <App />
            )}
          </I18nextProvider>
        </ThemeProvider>
      </>
    );
  }, [showSplash]);

  const renderApp = () => {
    return memoizedComponent;
  };

  return <>{renderApp()}</>;
});

AppRegistry.registerComponent(appName, () => Screen);
