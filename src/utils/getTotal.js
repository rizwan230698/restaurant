export const getSubTotal = (items) =>
  items.reduce((acc, { quantity, price }) => quantity * price + acc, 0);

export const getTotal = (state) => {
  const subTotal = state.cartItems.reduce(
    (acc, { quantity, price }) => quantity * price + acc,
    0
  );

  return subTotal + (state.tip / 100) * subTotal;
};
