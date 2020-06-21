import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { shortTitle } from '../utils/title';
import { getPrice } from '../utils/price';
import { CartContext } from '../context/cartProvider';

const RestaurentItem = ({ item, index }) => {
  const { addItem } = useContext(CartContext);
  return (
    <View style={{ ...styles.container, marginRight: index ? 15 : 0 }}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.title}>{shortTitle(item.name)}</Text>
      <Text style={styles.text}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>${getPrice(item.price)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addItem(item)}>
          <Text>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    paddingBottom: 2,
  },
  image: {
    height: 180,
    width: 220,
    borderRadius: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: 'grey',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginHorizontal: 2,
  },
});

export default RestaurentItem;

//120 250
