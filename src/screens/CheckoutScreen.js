import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CheckoutItem from '../components/CheckoutItem';
import { CartContext } from '../context/cartProvider';
import { getTotal, getSubTotal } from '../utils/getTotal';

const Checkout = ({ navigation }) => {
  const { state, addTip, resetCart } = useContext(CartContext);

  const handlePay = () => {
    if (state.cartItems.length) {
      alert(`$${getTotal(state)} Paid successfully!`);
      resetCart();
      return;
    }
    alert('Order something.');
    navigation.navigate('Search');
  };

  const ListHeader = () => (
    <View style={styles.checkoutHeader}>
      <View style={styles.headerBlock}>
        <Text>Item</Text>
      </View>
      <View style={styles.headerBlock}>
        <Text>Name</Text>
      </View>
      <View style={styles.headerBlock}>
        <Text>Quantity</Text>
      </View>
      <View style={styles.headerBlock}>
        <Text>Price</Text>
      </View>
    </View>
  );

  const ListFooter = () => (
    <View style={styles.footer}>
      <Text>Would you like to add some tip?</Text>
      <View style={styles.input}>
        <TextInput
          defaultValue={String(state.tip)}
          style={{ flex: 1 }}
          keyboardType="numeric"
          onChangeText={(value) => addTip(value)}
        />
        <Text>%</Text>
      </View>
      <View style={styles.bill}>
        <Text style={styles.billText}>
          SUB-TOTAL: ${getSubTotal(state.cartItems)}
        </Text>
        <Text style={styles.billText}>Tip: {state.tip || 0}%</Text>
        <Text style={styles.billText}>TOTAL: ${getTotal(state)}</Text>
      </View>
      <TouchableOpacity style={styles.payBtn} onPress={handlePay}>
        <Text style={{ color: 'white' }}>PAY</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.checkoutPage}
      ListHeaderComponent={ListHeader()}
      ListFooterComponent={ListFooter()}
      data={state.cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <CheckoutItem cartItem={item} />}
    />
  );
};

const styles = StyleSheet.create({
  checkoutPage: {
    width: '90%',
    minHeight: 600,
    alignItems: 'center',
    marginHorizontal: '5%',
    paddingVertical: 40,
  },
  checkoutHeader: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey',
  },
  headerBlock: {
    width: '25%',
    alignItems: 'center',
  },
  footer: {
    marginTop: 30,
    width: 280,
  },
  input: {
    flexDirection: 'row',
    borderColor: 'darkgrey',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 25,
    width: 80,
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bill: {
    alignItems: 'flex-end',
  },
  billText: {
    marginBottom: 5,
  },
  payBtn: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 8,
  },
});

export default Checkout;
