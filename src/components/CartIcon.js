import React, { useContext } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { CartContext } from '../context/cartProvider';

const CartIcon = () => {
  const { toggleCartHidden } = useContext(CartContext);
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={toggleCartHidden}>
      <Image
        style={styles.icon}
        source={require('../../assets/food-cart.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default CartIcon;
