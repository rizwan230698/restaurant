import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CartItem = ({ item: { image_url, price, name, quantity } }) => {
  console.log(image_url, price, name, quantity);
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text>{name}</Text>
        <Text>
          {quantity} x ${price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    width: '100%',
    flexDirection: 'row',
    height: 80,
    marginBottom: 15,
  },
  itemDetails: {
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: '30%',
  },
});

export default CartItem;
