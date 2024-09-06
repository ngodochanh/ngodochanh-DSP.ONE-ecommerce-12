'use client';

import { SvgMinus, SvgPlus } from '@/components/Svgs';
import { ProductType } from '@/type';
import { Button } from '@nextui-org/react';
import { useCallback, useState } from 'react';

function ProductAddToCart({ product }: { product: ProductType | undefined }) {
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
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
    const itemIndex = existingCart.findIndex((item: { id: number; quantity: number }) => item.id === product.id);

    if (itemIndex > -1) {
      // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      existingCart[itemIndex].quantity += quantity;
    } else {
      // Thêm sản phẩm mới vào giỏ hàng
      existingCart.push(newCartItem);
    }

    // Cập nhật giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
  }, [product, quantity]);

  return (
    <form className='space-y-[15px]'>
      <div className='py-[15px] flex gap-x-[29px] items-center'>
        <span className='text-clamp-24 font-semibold'>Số lượng</span>
        <div className='border-1 border-solid border-gray-very-light max-w-[158px] w-full flex items-center'>
          <Button
            isDisabled={quantity === 1}
            className='min-w-fit w-[46px] bg-transparent p-0 border-r-1 rounded-none hover:bg-default-100'
            onClick={() => handleDecrementQuantity()}
          >
            <SvgMinus className='w-clamp-16' />
          </Button>

          <span className='flex-1 text-clamp-16 font-semibold text-center'>{quantity}</span>

          <Button
            isDisabled={quantity === 10}
            className='min-w-fit w-[46px] bg-transparent p-0 border-l-1 rounded-none hover:bg-default-100'
            onClick={() => handleIncrementQuantity()}
          >
            <SvgPlus className='w-clamp-16' />
          </Button>
        </div>
      </div>
      <div className='flex gap-x-[5px]'>
        <Button className='rounded-md flex-1 bg-yellow-bright text-white h-12 !text-clamp-18'>Mua ngay</Button>
        <Button
          className='rounded-md flex-1 bg-white border-dark-charcoal border-1 border-solid h-12 !text-clamp-18 hover:bg-default-100'
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </form>
  );
}

export default ProductAddToCart;
