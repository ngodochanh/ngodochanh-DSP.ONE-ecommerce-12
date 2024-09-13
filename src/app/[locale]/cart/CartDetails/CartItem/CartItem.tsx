import { PRODUCT_LIST } from '@/constantsProduct';
import { CartType } from '@/type';
import { formatCurrencyVND } from '@/utils/currency';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';
import { FaMinus, FaRegTrashCan, FaPlus } from 'react-icons/fa6';

type CartItemProps = CartType & {
  onRemoveFromCart: (id: string) => void;
};

function CartItem({ id, quantity, onRemoveFromCart }: CartItemProps) {
  // Số lượng sản phẩm
  const [qty, setQty] = useState<number>(quantity);
  // Lấy thông tin sản phẩm
  const product = PRODUCT_LIST.find((item) => item.id === id);

  // Cập nhật giỏ hàng trong localStorage
  const updateCartInLocalStorage = useCallback((id: string, quantity: number) => {
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
  }, []);

  // Tăng số lượng sản phẩm
  const handleIncrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 10 ? prevQty : prevQty + 1;
      updateCartInLocalStorage(id, newQty);
      return newQty;
    });
  }, [id, updateCartInLocalStorage]);

  // Giảm số lượng sản phẩm
  const handleDecrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 1 ? prevQty : prevQty - 1;
      updateCartInLocalStorage(id, newQty);
      return newQty;
    });
  }, [id, updateCartInLocalStorage]);

  // Đồng bộ hóa số lượng từ localStorage
  useEffect(() => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const cartItem = cart.find((item: { id: string }) => item.id === id);
      setQty(cartItem ? cartItem.quantity : quantity);
    }
  }, [product, id, quantity]);

  return (
    <>
      {product ? (
        <li className="group flex gap-2 sm:gap-6">
          {/* Hình ảnh */}
          <Link
            href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
            className="relative block max-h-16 w-full min-w-16 max-w-24 sm:max-h-full"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </Link>

          <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-6">
            {/* Thông tin */}
            <div className="w-full sm:w-3/4">
              <h4 className="mb-1 text-clamp-24 font-medium group-hover:text-yellow-vivid"> {product.title}</h4>
              <p className="prose lg:prose-xl mb-4 line-clamp-2 text-justify text-clamp-16 font-normal text-gray-moderate">
                {product.description}
              </p>
              {/* Nút tăng giảm số lượng */}
              <div className="flex w-full max-w-[158px] items-center border-1 border-solid border-gray-very-light">
                <Button
                  isDisabled={qty === 1}
                  className="h-clamp-42 w-[46px] min-w-fit rounded-none border-r-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100"
                  onClick={handleDecrementQuantity}
                >
                  <FaMinus />
                </Button>

                <span className="flex-1 text-center text-clamp-16 font-semibold">{qty}</span>

                <Button
                  isDisabled={qty === 10}
                  className="h-clamp-42 w-[46px] min-w-fit rounded-none border-l-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100"
                  onClick={handleIncrementQuantity}
                >
                  <FaPlus />
                </Button>
              </div>
            </div>
            {/* Giá và giảm giá */}
            <div className="flex-1 text-right">
              <p className="text-clamp-24 font-medium">{formatCurrencyVND(product.price)}</p>
              {product.originalPrice > 0 && (
                <>
                  <p className="text-clamp-16 font-normal text-red-bright">
                    {formatCurrencyVND(product.originalPrice - product.price)}
                  </p>
                  <p className="text-clamp-16 font-normal text-gray-moderate"> đã giảm giá</p>
                </>
              )}
              {/* Xóa sản phẩm khỏi giỏ hàng */}
              <FaRegTrashCan
                className="ml-auto mt-6 cursor-pointer text-clamp-32 hover:text-yellow-vivid"
                onClick={() => onRemoveFromCart(id)}
              />
            </div>
          </div>
        </li>
      ) : (
        <li>Loading...</li>
      )}
    </>
  );
}

export default memo(CartItem);
