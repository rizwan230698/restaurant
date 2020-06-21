export const getSubTotal = (cartItems) =>
  cartItems.reduce((acc, { quantity, price }) => quantity * price + acc, 0);

export const getTotal = (state) => {
  const subTotal = getSubTotal(state.cartItems);

  return subTotal + (state.tip / 100) * subTotal;
};
