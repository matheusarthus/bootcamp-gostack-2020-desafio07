import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#191920',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <Header {...props} />,
          headerRight: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
            >
              <Icon name="shopping-basket" color="#FFF" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
