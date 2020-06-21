import React, { useReducer } from 'react';
import { cartActionTypes } from './cartTypes';
import { addItemToCart } from './cartUtils';

export const CartContext = React.createContext({
  state: { hidden: true, cartItems: [], tip: 0 },
  addItem: () => {},
  toggleCartHidden: () => {},
  addTip: () => {},
  resetCart: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.ADD_TIP:
      return {
        ...state,
        tip: action.payload,
      };
    case cartActionTypes.RESET_CART:
      return {
        ...state,
        hidden: true,
        cartItems: [],
        tip: 0,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, {
    hidden: true,
    cartItems: [],
    tip: 0,
  });

  const toggleCartHidden = () => {
    dispatch({ type: cartActionTypes.TOGGLE_CART_HIDDEN });
  };

  const addItem = (item) =>
    dispatch({
      type: cartActionTypes.ADD_ITEM,
      payload: item,
    });

  const addTip = (tip) =>
    dispatch({
      type: cartActionTypes.ADD_TIP,
      payload: tip,
    });

  const resetCart = () =>
    dispatch({
      type: cartActionTypes.RESET_CART,
    });

  return (
    <CartContext.Provider
      value={{ state: cartItems, addItem, toggleCartHidden, addTip, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
