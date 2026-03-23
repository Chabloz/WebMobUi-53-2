export function roundToDecimal(value, decimals = 2) {
  return parseFloat(Number(value).toFixed(decimals));
}
