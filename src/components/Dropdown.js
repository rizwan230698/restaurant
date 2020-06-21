import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import CartItem from '../components/CartItem';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import { CartContext } from '../context/cartProvider';

const CartDropdown = ({ cartItems }) => {
  const { toggleCartHidden } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <View style={styles.cartDropdown}>
      <View style={styles.cartItems}>
        {cartItems.length ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CartItem key={index} item={item} />
            )}
          />
        ) : (
          <Text style={styles.emptyMessage}>Your cart is empty</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Checkout');
          toggleCartHidden();
        }}
      >
        <Text style={{ color: 'white' }}>GO TO CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartDropdown: {
    position: 'absolute',
    width: 240,
    height: 340,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    top: 5,
    right: 0,
    zIndex: 5,
  },
  cartItems: {
    height: 250,
    overflow: 'scroll',
  },
  emptyMessage: {
    fontSize: 18,
    marginVertical: 50,
    alignSelf: 'center',
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});

export default CartDropdown;
