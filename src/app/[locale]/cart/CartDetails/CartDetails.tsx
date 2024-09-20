'use client';

import CartCustomerInfo from '@/app/[locale]/cart/CartDetails/CartCustomerInfo';
import CartItem from '@/app/[locale]/cart/CartDetails/CartItem';
import { actions, useStore } from '@/components/Store';
import { ICart } from '@/models';
import { useCallback, useEffect } from 'react';

function CartDetails() {
  const {
    state: { carts },
    dispatch,
  } = useStore();

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = useCallback(
    (id: string) => {
      dispatch(actions.deleteCart(id));
      const updatedCart = carts.filter((cart: ICart) => cart.id !== id);
      localStorage.setItem('carts', JSON.stringify(updatedCart));
    },
    [carts, dispatch],
  );

  // Cập nhật giỏ hàng trong localStorage
  const handleSyncCart = useCallback(
    (id: string, quantity: number) => {
      let carts = JSON.parse(localStorage.getItem('carts') || '[]');
      const index = carts.findIndex((cart: ICart) => cart.id === id);

      if (index !== -1) {
        // Cập nhật số lượng
        carts[index].quantity = quantity;
      } else {
        // Thêm mới
        carts.push({ id, quantity });
      }
      localStorage.setItem('carts', JSON.stringify(carts));
      dispatch(actions.setCart(carts));
    },
    [dispatch],
  );

  useEffect(() => {
    const cartData = localStorage.getItem('carts');
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
      {carts.length > 0 ? (
        <ul className="space-y-9 sm:space-y-12 sm:px-[30px]">
          {carts.map((cart) => (
            <CartItem key={cart.id} {...cart} onRemoveFromCart={handleRemoveFromCart} onSyncCart={handleSyncCart} />
          ))}
        </ul>
      ) : (
        <p className="px-[0] sm:px-[30px]">Giỏ hàng của bạn đang trống.</p>
      )}
    </div>
  );
}

export default CartDetails;
