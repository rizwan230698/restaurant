import React, { useContext } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { CartContext, CartProvider } from './src/context/cartProvider';

const Stack = createStackNavigator();

function App() {
  const { toggleCartHidden } = useContext(CartContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Food Search',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={toggleCartHidden}
              >
                <Image
                  style={styles.icon}
                  source={require('./assets/food-cart.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
            headerTitleAlign: 'center',
            headerTitleStyle: { width: 250 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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

export default () => (
  <CartProvider>
    <App />
  </CartProvider>
);
