function calculateTotalSalesWithTax(productArrays, taxRate) {
  const totalSale = productArrays.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const result = totalSale + totalSale * (taxRate / 100);
  return parseFloat(result.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
