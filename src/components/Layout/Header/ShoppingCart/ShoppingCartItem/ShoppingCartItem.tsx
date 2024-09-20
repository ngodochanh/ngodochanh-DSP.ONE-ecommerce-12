import { PRODUCT_LIST } from '@/data';
import { CartItemProps, ICart } from '@/models';
import { formatCurrencyVND } from '@/utils/currency';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaRegTrashCan } from 'react-icons/fa6';

function ShoppingCartItem({ id, quantity, onRemoveFromCart, onSyncCart }: CartItemProps) {
  // Số lượng sản phẩm
  const [qty, setQty] = useState<number>(quantity);
  // Lấy thông tin sản phẩm
  const product = PRODUCT_LIST.find((item) => item.id === id);

  // Tăng số lượng sản phẩm
  const handleIncrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 10 ? prevQty : prevQty + 1;
      return newQty;
    });
  }, []);

  // Giảm số lượng sản phẩm
  const handleDecrementQuantity = useCallback(() => {
    setQty((prevQty) => {
      const newQty = prevQty === 1 ? prevQty : prevQty - 1;
      return newQty;
    });
  }, []);

  // Đồng bộ hóa số lượng với giỏ hàng
  useEffect(() => {
    onSyncCart(id, qty);
  }, [id, qty, onSyncCart]);

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
    <li className="flex h-24 cursor-pointer gap-x-2 p-2 text-black hover:bg-gray-lightest sm:gap-x-4 sm:px-4">
      <Link
        href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
        className="relative block w-1/4"
      >
        <Image src={product.image} alt={product.title} fill className="rounded-lg object-cover" />
      </Link>

      <div className="flex flex-col justify-between">
        <h4 className="mb-1 text-clamp-16 font-medium">{product.title}</h4>

        {/* Nút tăng giảm số lượng */}
        <div className="flex w-fit items-center border-1 border-solid border-gray-very-light">
          <Button
            isDisabled={qty === 1}
            className="h-8 w-9 min-w-fit rounded-none border-r-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100 hover:text-yellow-vivid"
            onClick={handleDecrementQuantity}
          >
            <FaMinus />
          </Button>

          <span className="w-10 text-center text-clamp-14 font-semibold">{qty}</span>

          <Button
            isDisabled={qty === 10}
            className="h-8 w-9 min-w-fit rounded-none border-l-1 bg-transparent p-0 text-clamp-16 hover:bg-default-100 hover:text-yellow-vivid"
            onClick={handleIncrementQuantity}
          >
            <FaPlus />
          </Button>
        </div>
      </div>
      {/* Giá và giảm giá */}
      <div className="flex flex-grow flex-col items-end justify-between">
        <p className="text-clamp-16 font-medium text-red-bright">{formatCurrencyVND(product.price)}</p>
        {/* Xóa sản phẩm khỏi giỏ hàng */}
        <FaRegTrashCan
          className="cursor-pointer text-clamp-16 hover:text-yellow-vivid"
          onClick={() => onRemoveFromCart(id)}
        />
      </div>
    </li>
  );
}

export default ShoppingCartItem;
