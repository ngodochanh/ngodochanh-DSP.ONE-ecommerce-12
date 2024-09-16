'use client';

import CartCustomerInfo from '@/app/[locale]/cart/CartDetails/CartCustomerInfo';
import CartItem from '@/app/[locale]/cart/CartDetails/CartItem';
import { actions, useStore } from '@/components/Store';
import { ICart } from '@/type';
import { useCallback, useEffect } from 'react';

function CartDetails() {
  const {
    state: { cart },
    dispatch,
  } = useStore();

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = useCallback(
    (id: string) => {
      dispatch(actions.deleteCart(id));
      const updatedCart = cart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    [cart, dispatch],
  );

  // Cập nhật giỏ hàng trong localStorage
  const handleSyncCart = useCallback(
    (id: string, quantity: number) => {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const index = cart.findIndex((item: { id: string }) => item.id === id);

      if (index !== -1) {
        // Cập nhật số lượng
        cart[index].quantity = quantity;
      } else {
        // Thêm mới
        cart.push({ id, quantity });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(actions.setCart(cart));
    },
    [dispatch],
  );

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCartData: ICart[] = JSON.parse(cartData);
      dispatch(actions.setCart(parsedCartData));
    }
  }, [dispatch]);

  return (
    <div className="space-y-9 sm:space-y-12">
      {/* Thông tin khách hàng */}
      <CartCustomerInfo />
      {/* Sản phẩm trong giỏ */}
      {cart.length > 0 ? (
        <ul className="space-y-9 sm:space-y-12 sm:px-[30px]">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} onRemoveFromCart={handleRemoveFromCart} onSyncCart={handleSyncCart} />
          ))}
        </ul>
      ) : (
        <p className="px-[0] sm:px-[30px]">Giỏ hàng của bạn đang trống.</p>
      )}
    </div>
  );
}

export default CartDetails;
