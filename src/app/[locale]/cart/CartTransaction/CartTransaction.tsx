'use client';

import { ORDER_OPTIONS, PAYMENT_METHODS, SHIPPING_METHODS } from '@/constantsProduct';
import { Button, Input, Radio, RadioGroup, Select, SelectItem, Textarea } from '@nextui-org/react';

function CartTransaction() {
  return (
    <form>
      <h4 className="mb-7 text-center text-clamp-20 font-bold uppercase">THANH TOÁN</h4>

      {/* Phương thức vận chuyển */}
      <div className="mb-5 border-b-1 border-solid border-black pb-4">
        <label htmlFor="shipping" className="mb-4 block text-clamp-16 font-bold">
          Phương thức vận chuyển
        </label>
        <Select
          isRequired
          radius="none"
          id="shipping"
          errorMessage={'You must select a cat'}
          isInvalid={false}
          placeholder="Chọn phương thức vận chuyển"
          classNames={{
            trigger: 'shadow-none bg-transparent pl-0 h-6 min-h-6',
          }}
        >
          {SHIPPING_METHODS.map((shipping) => (
            <SelectItem key={shipping.id}>{shipping.label}</SelectItem>
          ))}
        </Select>
      </div>
      {/* Hình thức thanh toán */}
      <div className="border-b-1 border-solid border-black pb-4">
        <label htmlFor="payment" className="mb-4 block text-clamp-16 font-bold">
          Hình thức thanh toán
        </label>
        <Select
          isRequired
          id="payment"
          radius="none"
          errorMessage={'You must select a cat'}
          isInvalid={false}
          placeholder="Chọn phương thức thanh toán"
          classNames={{
            trigger: 'shadow-none bg-transparent pl-0 h-6 min-h-6',
          }}
        >
          {PAYMENT_METHODS.map((payment) => (
            <SelectItem key={payment.id}>{payment.label}</SelectItem>
          ))}
        </Select>
      </div>
      {/*  */}

      <div className="mb-5">
        <RadioGroup classNames={{ wrapper: 'gap-0' }} isInvalid={false} errorMessage="Select an animal">
          {ORDER_OPTIONS.map((order) => (
            <div key={order.id} className="border-b-1 border-solid border-black py-5">
              <Radio
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
        <label htmlFor="" className="block w-fit text-clamp-16 font-bold">
          Mã giảm giá
        </label>

        <Input
          type="text"
          radius="none"
          placeholder="Chọn hoặc nhận mã"
          classNames={{
            base: 'flex-1',
            inputWrapper: 'bg-transparent shadow-none border-1 border-gray-light-mid border-solid rounded-sm',
          }}
        />
      </div>
      {/* Ghi chú đơn hàng */}
      <div className="mb-5 border-b-1 border-solid border-black pb-4">
        <label htmlFor="" className="mb-4 block text-clamp-16 font-bold">
          Ghi chú đơn hàng
        </label>

        <Textarea
          placeholder="Nhập nội dung"
          radius="none"
          isInvalid={false}
          errorMessage="The description should be at least 255 characters long."
          rows={5}
          disableAnimation
          disableAutosize
          classNames={{
            inputWrapper: 'bg-transparent shadow-none border-1 border-gray-light-mid border-solid rounded-sm resize-y ',
          }}
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
          <span className="text-clamp-24 font-medium text-gray-moderate">0</span>
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
          <span className="text-clamp-24 font-medium text-gray-moderate">0</span>
        </div>
      </div>

      <Button className="h-[52px] w-full rounded-md bg-yellow-vivid text-white">Xác nhận đơn hàng</Button>
    </form>
  );
}

export default CartTransaction;
