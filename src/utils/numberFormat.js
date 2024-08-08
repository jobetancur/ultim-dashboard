/**
 * Formats a number according to the specified options.
 *
 * The Intl.NumberFormat object is used to format numbers according to a specific locale (e.g., "en-IN" for Indian English).
 * The options parameter specifies how the number should be formatted.
 * The default options are set to format the number with a maximum of 3 fraction digits.
 */
export function numberFormat(number, options = {
  maximumFractionDigits: 3
}) {
  return new Intl.NumberFormat('en-IN', options).format(number);
}