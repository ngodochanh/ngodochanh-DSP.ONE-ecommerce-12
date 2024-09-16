'use client';

import { ORDER_OPTIONS, PAYMENT_METHODS, PRODUCT_LIST, SHIPPING_METHODS } from '@/constantsProduct';
import { Button, Input, Radio, RadioGroup, Select, SelectItem, Textarea } from '@nextui-org/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { actions, useStore } from '@/components/Store';
import { formatCurrencyVND } from '@/utils/currency';
import { useMemo } from 'react';

const cartTransactionSchema = z.object({
  // Phương thức vận chuyển
  shipping: z.string().nonempty('Chọn phương thức vận chuyển'),
  // Phương thức thanh toán
  payment: z.string().nonempty('Chọn phương thức thanh toán'),
  // Xử lý đơn hàng
  orderProcessing: z.string().nonempty('Chọn xử lý đơn hàng'),
  // Mã giảm giá
  discountCode: z.string().optional(),
  // Ghi chú đơn hàng
  cartNotes: z.string().optional(),
});

type TCartTransactionSchema = z.infer<typeof cartTransactionSchema>;

function CartTransaction() {
  const {
    state: { customer, cart },
    dispatch,
  } = useStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, c) => {
      const product = PRODUCT_LIST.find((p) => p.id === c.id);
      return total + (product ? product.price * c.quantity : 0);
    }, 0);
  }, [cart]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCartTransactionSchema>({
    resolver: zodResolver(cartTransactionSchema),
    defaultValues: {
      shipping: SHIPPING_METHODS[0].id,
      payment: PAYMENT_METHODS[0].id,
      orderProcessing: '',
      discountCode: '',
      cartNotes: '',
    },
  });

  // Gửi biểu mẫu
  const onSubmit = (data: TCartTransactionSchema) => {
    const extendedData = {
      ...data, // Nối các dữ liệu từ `data` (các thông tin đã được nhập vào)
      fullname: customer.fullname,
      phone: customer.phone,
      address: customer.address,
      // Tổng tiền
      totalAmount: totalPrice,
      // Khuyến mãi
      discount: '',
      // Phí vận chuyển
      shippingFee: 0,
      // Số điểm tích lũy
      rewardPoints: 0,
      // Tổng thanh toán
      finalAmount: totalPrice,
    };

    console.log(extendedData);
    reset();
    dispatch(actions.resetCart());
    localStorage.removeItem('cart');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="mb-7 text-center text-clamp-20 font-bold uppercase">THANH TOÁN</h4>

      {/* Phương thức vận chuyển */}
      <div className="mb-5 border-b-1 border-solid border-black pb-4">
        <label htmlFor="shipping" className="mb-4 block cursor-pointer text-clamp-16 font-bold">
          Phương thức vận chuyển
        </label>
        <Select
          id="shipping"
          radius="none"
          placeholder="Chọn phương thức vận chuyển"
          classNames={{
            trigger: 'shadow-none bg-transparent pl-0 h-6 min-h-6',
          }}
          {...register('shipping')}
          isInvalid={!!errors.shipping}
          errorMessage={errors.shipping?.message as string}
          selectedKeys={[SHIPPING_METHODS[0].id]}
        >
          {SHIPPING_METHODS.map((shipping) => (
            <SelectItem key={shipping.id}>{shipping.label}</SelectItem>
          ))}
        </Select>
      </div>
      {/* Hình thức thanh toán */}
      <div className="border-b-1 border-solid border-black pb-4">
        <label htmlFor="payment" className="mb-4 block cursor-pointer text-clamp-16 font-bold">
          Hình thức thanh toán
        </label>
        <Select
          id="payment"
          radius="none"
          placeholder="Chọn phương thức thanh toán"
          classNames={{
            trigger: 'shadow-none bg-transparent pl-0 h-6 min-h-6',
          }}
          isInvalid={!!errors.payment}
          errorMessage={errors.payment?.message as string}
          {...register('payment')}
          selectedKeys={[PAYMENT_METHODS[0].id]}
        >
          {PAYMENT_METHODS.map((payment) => (
            <SelectItem key={payment.id}>{payment.label}</SelectItem>
          ))}
        </Select>
      </div>
      {/*  */}

      <div className="mb-5">
        <RadioGroup
          classNames={{ wrapper: 'gap-0' }}
          isInvalid={!!errors.orderProcessing}
          errorMessage={errors.orderProcessing?.message as string}
          defaultValue={ORDER_OPTIONS[0].id}
        >
          {ORDER_OPTIONS.map((order) => (
            <div key={order.id} className="border-b-1 border-solid border-black py-5">
              <Radio
                {...register('orderProcessing')}
                value={order.id}
                classNames={{ wrapper: 'group-data-[selected=true]:border-yellow-vivid', control: 'bg-yellow-vivid' }}
              >
                {order.label}
              </Radio>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Mã giảm giá */}
      <div className="mb-5 flex items-center gap-x-14 border-b-1 border-solid border-black pb-5">
        <label htmlFor="discount-code" className="block w-fit cursor-pointer text-clamp-16 font-bold">
          Mã giảm giá
        </label>

        <Input
          id="discount-code"
          type="text"
          radius="none"
          placeholder="Chọn hoặc nhận mã"
          classNames={{
            base: 'flex-1',
            inputWrapper: 'bg-transparent shadow-none border-1 border-gray-light-mid border-solid rounded-sm',
          }}
          isInvalid={!!errors.discountCode}
          errorMessage={errors.discountCode?.message as string}
          {...register('discountCode')}
        />
      </div>
      {/* Ghi chú đơn hàng */}
      <div className="mb-5 border-b-1 border-solid border-black pb-4">
        <label htmlFor="cart-notes" className="mb-4 block cursor-pointer text-clamp-16 font-bold">
          Ghi chú đơn hàng
        </label>

        <Textarea
          id="cart-notes"
          placeholder="Nhập nội dung"
          radius="none"
          rows={5}
          disableAnimation
          disableAutosize
          classNames={{
            inputWrapper: 'bg-transparent shadow-none border-1 border-gray-light-mid border-solid rounded-sm resize-y ',
          }}
          isInvalid={!!errors.cartNotes}
          errorMessage={errors.cartNotes?.message as string}
          {...register('cartNotes')}
        />
      </div>
      {/* Thời gian giao hàng dự kiến */}
      <div className="mb-5 border-b-1 border-solid border-black pb-4">
        <h3 className="mb-4 block text-clamp-16 font-bold">Thời gian giao hàng dự kiến</h3>
        <p className="text-clamp-16 font-normal">5 ngày làm việc</p>
      </div>

      <div className="mb-9 space-y-4">
        <div className="flex justify-between gap-x-3">
          <strong className="text-clamp-16 font-bold">Tổng tiền</strong>
          <span className="text-clamp-24 font-medium text-gray-moderate">{formatCurrencyVND(totalPrice)}</span>
        </div>
        <div className="flex justify-between gap-x-3">
          <strong className="text-clamp-16 font-bold">Khuyến mãi</strong>
          <span className="text-clamp-24 font-medium text-gray-moderate">0</span>
        </div>
        <div className="flex justify-between gap-x-3">
          <strong className="text-clamp-16 font-bold">Phí vận chuyển</strong>
          <span className="text-clamp-24 font-medium text-gray-moderate">0</span>
        </div>
        <div className="flex justify-between gap-x-3">
          <strong className="text-clamp-16 font-bold">Số điểm tích lũy</strong>
          <span className="text-clamp-24 font-medium text-gray-moderate">0</span>
        </div>
        <div className="flex justify-between gap-x-3">
          <strong className="text-clamp-16 font-bold">Tổng thanh toán</strong>
          <span className="text-clamp-24 font-medium text-gray-moderate">{formatCurrencyVND(totalPrice)}</span>
        </div>
      </div>

      <Button
        type="submit"
        className="h-[52px] w-full rounded-md bg-yellow-vivid text-white"
        isDisabled={isSubmitting || totalPrice === 0}
      >
        Xác nhận đơn hàng
      </Button>
    </form>
  );
}

export default CartTransaction;
