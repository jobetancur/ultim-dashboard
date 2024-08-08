import numeral from 'numeral';

// Formats the given amount using the specified numeral options.
export const format = (amount, opt = '0a') => {
  return numeral(amount).format(opt).toUpperCase();
};