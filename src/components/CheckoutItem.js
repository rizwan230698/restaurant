import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, image_url } = cartItem;
  return (
    <View style={styles.checkoutItem}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image_url }} style={styles.image} />
      </View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{quantity}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutItem: {
    width: '100%',
    flexDirection: 'row',
    minHeight: 100,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 0,
    fontSize: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '25%',
    height: 80,
    paddingRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    width: '25%',
  },
});

export default CheckoutItem;
