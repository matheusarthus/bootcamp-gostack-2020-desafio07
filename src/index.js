import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import store from './store';
import colors from './styles/colors';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <>
          <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
          <Routes />
        </>
      </NavigationContainer>
    </Provider>
  );
}
