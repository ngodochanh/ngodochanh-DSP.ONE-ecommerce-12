'use client';

import { FaMinus, FaPlus } from 'react-icons/fa6';
import { Button } from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';
import { IProduct, ICart } from '@/models';
import { actions, useStore } from '@/components/Store';

function ProductAddToCart({ product }: { product: IProduct | undefined }) {
  const {
    state: { carts },
    dispatch,
  } = useStore();

  const [quantity, setQuantity] = useState(1);

  // Hàm cập nhật số lượng sản phẩm
  const handleIncrementQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity === 10 ? prevQuantity : prevQuantity + 1));
  }, []);

  const handleDecrementQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? prevQuantity : prevQuantity - 1));
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = useCallback(() => {
    if (!product) return;

    const newCartItem = {
      id: product.id,
      quantity,
    };

    // Lấy giỏ hàng hiện tại từ localStorage
    const existingCarts = JSON.parse(localStorage.getItem('carts') || '[]');

    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
    const itemIndex = existingCarts.findIndex((cart: ICart) => cart.id === product.id);

    if (itemIndex > -1) {
      // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      existingCarts[itemIndex].quantity = quantity;
    } else {
      // Thêm sản phẩm mới vào giỏ hàng
      existingCarts.push(newCartItem);
    }

    // Cập nhật giỏ hàng vào localStorage
    localStorage.setItem('carts', JSON.stringify(existingCarts));

    dispatch(actions.setCart(existingCarts));
  }, [product, quantity, dispatch]);

  // Kiểm tra sản phẩm trong giỏ hàng từ `state.carts` hoặc `localStorage`
  useEffect(() => {
    if (product) {
      // Kiểm tra nếu sản phẩm có trong `state.carts`
      const cartItem = carts.find((cart: ICart) => cart.id === product.id);

      if (cartItem) {
        // Nếu sản phẩm có trong `carts`, thiết lập số lượng từ `carts`
        setQuantity(cartItem.quantity);
      } else {
        // Nếu không, kiểm tra `localStorage`
        const existingCarts = JSON.parse(localStorage.getItem('carts') || '[]');
        const localCartItem = existingCarts.find((cart: ICart) => cart.id === product.id);

        // Nếu có trong `localStorage`, thiết lập số lượng từ `localStorage`
        if (localCartItem) {
          setQuantity(localCartItem.quantity);
        }
      }
    }
  }, [product, carts]);

  // Kiểm tra sản phẩm trong giỏ hàng
  useEffect(() => {
    if (product) {
      const existingCarts = JSON.parse(localStorage.getItem('carts') || '[]');
      const cartItem = existingCarts.find((cart: ICart) => cart.id === product.id);

      // Nếu sản phẩm có trong giỏ hàng, cập nhật số lượng
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [product]);

  return (
    <form className="space-y-[15px]">
      <div className="flex items-center gap-x-[29px] py-[15px]">
        <span className="text-clamp-24 font-semibold">Số lượng</span>
        <div className="flex w-full max-w-[158px] items-center border-1 border-solid border-gray-very-light">
          <Button
            isDisabled={quantity === 1}
            className="h-clamp-42 w-[46px] min-w-fit rounded-none border-r-1 bg-transparent p-0 hover:bg-default-100"
            onClick={() => handleDecrementQuantity()}
          >
            <FaMinus className="w-clamp-16" />
          </Button>

          <span className="flex-1 text-center text-clamp-16 font-semibold">{quantity}</span>

          <Button
            isDisabled={quantity === 10}
            className="h-clamp-42 w-[46px] min-w-fit rounded-none border-l-1 bg-transparent p-0 hover:bg-default-100"
            onClick={() => handleIncrementQuantity()}
          >
            <FaPlus className="w-clamp-16" />
          </Button>
        </div>
      </div>
      <div className="flex gap-x-[5px]">
        <Button className="h-12 flex-1 rounded-md bg-orange-bright !text-clamp-18 text-white">Mua ngay</Button>
        <Button
          className="h-12 flex-1 rounded-md border-1 border-solid border-dark-charcoal bg-white !text-clamp-18 hover:bg-default-100"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </form>
  );
}

export default ProductAddToCart;
