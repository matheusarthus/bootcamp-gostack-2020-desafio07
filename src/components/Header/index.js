import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  BasketImage,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <BasketImage onPress={() => navigation.navigate('Home')}>
        <Logo />
      </BasketImage>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>3</ItemCount>
      </BasketContainer>
    </Wrapper>
  );
}
