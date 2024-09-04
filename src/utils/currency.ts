function calculateDiscountPercentage(price: number, originalPrice: number): string {
  const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
  return discountPercentage.toFixed(2) + '%';
}

function formatCurrencyVND(amount: number): string {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export { calculateDiscountPercentage, formatCurrencyVND };
