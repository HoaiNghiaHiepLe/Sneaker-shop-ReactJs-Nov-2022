export const calcDiscount = (currentPrice, discount) => {
  return currentPrice - (currentPrice * discount) / 100;
};

export const calcPrice = (price, quantity) => price * quantity;

export const calcTotalPrice = ({ cartList }) => {
  if (cartList.length > 0) {
    return cartList
      .map((item) => calcDiscount(item.price, item.discount) * item.quantity)
      .reduce((total, price) => total + price);
  } else {
    return 0;
  }
};
