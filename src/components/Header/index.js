import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <BasketContainer onPress={() => {}}>
        {/* <Icon name="shopping-basket" color="#FFF" size={24} /> */}
        <ItemCount>3</ItemCount>
      </BasketContainer>
    </Wrapper>
  );
}
