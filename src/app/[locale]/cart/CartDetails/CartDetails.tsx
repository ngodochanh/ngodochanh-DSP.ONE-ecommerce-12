'use client';

import CartCustomerInfo from '@/app/[locale]/cart/CartDetails/CartCustomerInfo';
import CartItem from '@/app/[locale]/cart/CartDetails/CartItem';
import { CartType } from '@/type';
import { useCallback, useEffect, useState } from 'react';

function CartDetails() {
  const [cartList, setCartList] = useState<CartType[]>([]);

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = useCallback(
    (id: string) => {
      const updatedCart = cartList.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartList(updatedCart);
    },
    [cartList],
  );

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const cartData = localStorage.getItem('cart');

    // Nếu dữ liệu tồn tại, chuyển đổi chuỗi JSON thành object và cập nhật state
    if (cartData) {
      setCartList(JSON.parse(cartData));
    }
  }, []);

  return (
    <div className="space-y-9 sm:space-y-12">
      {/* Thông tin khách hàng */}
      <CartCustomerInfo />
      {/* Sản phẩm trong giỏ */}
      {cartList.length > 0 ? (
        <ul className="space-y-9 sm:space-y-12 sm:px-[30px]">
          {cartList.map((item) => (
            <CartItem key={item.id} {...item} onRemoveFromCart={handleRemoveFromCart} />
          ))}
        </ul>
      ) : (
        <p className="px-[0] sm:px-[30px]">Giỏ hàng của bạn đang trống.</p>
      )}
    </div>
  );
}

export default CartDetails;
