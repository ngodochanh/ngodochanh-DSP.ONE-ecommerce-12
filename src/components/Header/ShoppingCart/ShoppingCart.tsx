import { useCallback, useEffect } from 'react';
import { actions, useStore } from '@/components/Store';
import ShoppingCartItem from './ShoppingCartItem';
import { ICart } from '@/types';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import Link from 'next/link';

function ShoppingCart() {
  const {
    state: { carts },
    dispatch,
  } = useStore();

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = useCallback(
    (id: string) => {
      dispatch(actions.deleteCart(id));
      const updatedCart = carts.filter((item: ICart) => item.id !== id);
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
    <div className="h-scrollable invisible fixed left-0 right-0 top-full origin-top-right scale-0 transform cursor-default bg-white opacity-0 shadow-sm duration-300 ease-out before:absolute before:-top-7 before:right-0 before:block before:h-7 before:w-[15%] before:content-[''] group-hover:visible group-hover:scale-100 group-hover:opacity-100 sm:left-[unset] sm:right-[10%] sm:w-[520px] sm:rounded-lg lg:absolute lg:right-0 lg:mt-[19px]">
      {carts.length === 0 ? (
        <div className="relative block h-[351px] w-full">
          <Image src={'/images/carts/cart_empty.png'} alt="Giỏ hàng trống" fill className="rounded-lg object-contain" />

          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-clamp-28">Giỏ hàng trống</p>
        </div>
      ) : (
        <>
          <header className="p-2 text-gray-light sm:p-4">Giỏ hàng</header>
          <ul className="overflow-hidden overflow-y-auto overscroll-y-contain scroll-smooth">
            {carts.map((cart) => (
              <ShoppingCartItem
                key={cart.id}
                {...cart}
                onRemoveFromCart={handleRemoveFromCart}
                onSyncCart={handleSyncCart}
              />
            ))}
          </ul>

          <footer className="ml-auto w-fit p-2 sm:p-4">
            <Button
              as={Link}
              href={getLocalizedPath(process.env.CART!)}
              radius="sm"
              className="h-[38px] bg-yellow-bright text-clamp-16 text-white"
            >
              Xem tất cả
            </Button>
          </footer>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
