export const calcDiscount = (currentPrice, discount) => {
  return currentPrice - (currentPrice * discount) / 100;
};
