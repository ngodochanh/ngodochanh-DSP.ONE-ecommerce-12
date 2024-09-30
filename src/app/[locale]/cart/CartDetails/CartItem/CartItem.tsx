import { PRODUCT_LIST } from '@/data';
import { CartItemProps, ICart } from '@/models';
import { formatCurrencyVND } from '@/utils/currency';
import { Button } from '@nextui-org/react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';
import { FaMinus, FaRegTrashCan, FaPlus } from 'react-icons/fa6';

function CartItem({ id, quantity, onRemoveFromCart, onSyncCart }: CartItemProps) {
  const locale = useLocale();
  // Số lượng sản phẩm
  const [qty, setQty] = useState<ICart['quantity']>(quantity);
  // Lấy thông tin sản phẩm
  const product = PRODUCT_LIST.find((item) => item.id === id);

  // Tăng số lượng sản phẩm
  const handleIncrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 10 ? prevQty : prevQty + 1;
      onSyncCart(id, newQty);
      return newQty;
    });
  }, [id]);

  // Giảm số lượng sản phẩm
  const handleDecrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 1 ? prevQty : prevQty - 1;
      onSyncCart(id, newQty);
      return newQty;
    });
  }, [id]);

  // Đồng bộ hóa số lượng từ localStorage
  useEffect(() => {
    if (product) {
      const carts = JSON.parse(localStorage.getItem('carts') || '[]');
      const cartItem = carts.find((cart: ICart) => cart.id === id);
      setQty(cartItem ? cartItem.quantity : quantity);
    }
  }, [product, id, quantity]);

  if (!product) {
    return <li>Loading...</li>;
  }

  return (
    <li className="group flex gap-2 sm:gap-6">
      {/* Hình ảnh */}
      <Link
        href={`/${locale}${process.env.PRODUCTS}/${product.slug}-${product.id}.html`}
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
          <h4 className="mb-1 text-clamp-24 font-medium group-hover:text-orange-bright"> {product.title}</h4>
          <p className="prose lg:prose-xl mb-4 line-clamp-2 text-justify text-clamp-16 font-normal text-gray-moderate">
            {product.description}
          </p>
          {/* Nút tăng giảm số lượng */}
          <div className="flex w-full max-w-[158px] items-center border-1 border-solid border-gray-very-light">
            <Button
              isDisabled={qty === 1}
              className="h-9 w-[46px] min-w-fit rounded-none border-r-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100 lg:h-10"
              onClick={handleDecrementQuantity}
            >
              <FaMinus />
            </Button>

            <span className="flex-1 text-center text-clamp-16 font-semibold">{qty}</span>

            <Button
              isDisabled={qty === 10}
              className="h-9 w-[46px] min-w-fit rounded-none border-l-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100 lg:h-10"
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
            className="ml-auto mt-6 cursor-pointer text-clamp-32 hover:text-orange-bright"
            onClick={() => onRemoveFromCart(id)}
          />
        </div>
      </div>
    </li>
  );
}

export default memo(CartItem);
