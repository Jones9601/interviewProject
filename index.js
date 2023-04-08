/**
 * @format
 */

import React, {useMemo} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from '@theme';
import {observer} from 'mobx-react-lite';

const Screen = observer(() => {
  const memoizedComponent = useMemo(() => {
    return (
      <>
        <ThemeProvider>
          {/* <I18nextProvider i18n={i18n}> */}
          <App />
          {/* </I18nextProvider> */}
        </ThemeProvider>
      </>
    );
  }, []);

  const renderApp = () => {
    return memoizedComponent;
  };

  return <>{renderApp()}</>;
});

AppRegistry.registerComponent(appName, () => Screen);
