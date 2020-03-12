/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products ? (
          <>
            <Products
              data={products}
              keyExtractor={product => String(product.id)}
              extraData={this.props}
              renderItem={({ item }) => (
                <Product key={item.id}>
                  <ProductInfo>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductDetails>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormated}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete onPress={() => {}}>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </ProductDelete>
                  </ProductInfo>
                  <ProductControls>
                    <ProductControlButton onPress={() => {}}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductAmount value="3" />
                    <ProductControlButton>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductSubtotal>R$99,00</ProductSubtotal>
                  </ProductControls>
                </Product>
              )}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>R$345,00</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    );
  }
}
