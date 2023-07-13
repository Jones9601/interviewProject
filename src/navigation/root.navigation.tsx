import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackHandler} from 'react-native';
import {navigationRef} from '@src/core-components/hoc/Hoc';
import {Home, Register} from '@src/modules';

export const Stack = createNativeStackNavigator();

const routes = [
  {
    name: 'home',
    component: Home,
  },
  {
    name: 'register',
    component: Register,
  },
];

const backActionHandler = () => {
  // TODO: will be handled in future
  return true;
};

const Root = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backActionHandler);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'home'}
        screenOptions={{gestureEnabled: false}}
      >
        {routes?.map(route => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
