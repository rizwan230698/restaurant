import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { CartProvider } from './src/context/cartProvider';
import CartIcon from './src/components/CartIcon';

const Stack = createStackNavigator();

const App = () => (
  <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Food Search',
            headerTitleAlign: 'center',
            headerRight: () => <CartIcon />,
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
);

export default App;
