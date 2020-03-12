import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        <Routes />
      </>
    </NavigationContainer>
  );
}
