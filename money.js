 //if (typeof priceCents !== 'number') {
  //   console.warn('Invalid price:', priceCents);
  //   return '0.00';
  // }

export function formatCurrency(priceCents) {

  return (Math.round(priceCents) / 100).toFixed(2);
}

// Keep both named and default export for compatibility
export default formatCurrency;