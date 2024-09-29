'use client';

import { ORDER_OPTIONS, PAYMENT_METHODS, PRODUCT_LIST, SHIPPING_METHODS } from '@/data';
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Switch,
} from '@nextui-org/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { actions, useStore } from '@/components/Store';
import { formatCurrencyVND } from '@/utils/currency';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { cartTransactionSchema, ICartTransactionSchema } from '@/schemas';
import { IAddressDirectory } from '@/models';
import { TbCirclePlus } from 'react-icons/tb';
import AddAddressForm from '@/app/[locale]/cart/CartTransaction/AddAddressForm';

function CartTransaction() {
  const {
    state: { carts, addressDirectory, profile },
    dispatch,
  } = useStore();

  // Modal thêm địa chỉ hay chọn địa chỉ mặc định (khi chưa có địa chỉ mặc định)
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);

  // Hiển thị danh sách địa chỉ
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Địa chỉ người dùng chọn từ danh sách các địa chỉ khi không có địa chỉ mặc định. Lưu trữ thông tin cần thiết để lấy thông tin gửi lên
  const [selectedAddress, setSelectedAddress] = useState<
    | {
        addressId: string; // ID của địa chỉ được chọn
        isSelected: boolean; // Kiểm tra xem địa chỉ có được chọn hay không
      }
    | undefined
  >();

  // Địa chỉ mặc định của người dùng
  const [activeAddress, setActiveAddress] = useState<IAddressDirectory | undefined>(undefined);

  // Tổng giá của giỏ hàng
  const totalPrice = useMemo(() => {
    return carts.reduce((total, cart) => {
      const product = PRODUCT_LIST.find((prod) => prod.id === cart.id);
      return total + (product ? product.price * cart.quantity : 0);
    }, 0);
  }, [carts]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ICartTransactionSchema>({
    resolver: zodResolver(cartTransactionSchema),
    defaultValues: {
      shipping: SHIPPING_METHODS[0].id,
      payment: PAYMENT_METHODS[0].id,
      orderProcessing: '',
      discountCode: '',
      cartNotes: '',
    },
  });

  //
  const handleSubmitAddress = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lấy thông tin địa chỉ của người dùng thông qua addressId của state selectedAddress
    const newAdd = addressDirectory.find((item) => item.id === selectedAddress?.addressId);
    // Nếu có và isSelected trong selectedAddress là true (isSelected để chắc chắn không phải là undefined)
    if (newAdd && selectedAddress?.isSelected) {
      // Cập nhật isActive trong địa chỉ của người dùng
      dispatch(actions.updateAddressDirectory({ ...newAdd, isActive: selectedAddress.isSelected }));
      setSelectedAddress(undefined);
    }
  };

  // Gửi biểu mẫu
  const handleSubmitCartTransaction = (data: ICartTransactionSchema) => {
    if (activeAddress) {
      const extendedData = {
        ...data, // Nối các dữ liệu từ `data` (các thông tin đã được nhập vào)
        id_customer: profile.id,
        fullname: activeAddress.fullname,
        phone: activeAddress.phone,
        address: activeAddress.address,
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
      localStorage.removeItem('carts');
    } else {
      // Gọi modal danh sách địa chỉ
      onOpen();
    }
  };

  // useEffect để cập nhật activeAddress khi addressDirectory thay đổi
  useEffect(() => {
    const foundAddress = addressDirectory.find((item) => item.isActive);
    setActiveAddress(foundAddress);
  }, [addressDirectory]); // Chạy effect khi addressDirectory thay đổi

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitCartTransaction)}>
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
                  classNames={{
                    wrapper: 'group-data-[selected=true]:border-orange-bright',
                    control: 'bg-orange-bright',
                  }}
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
              inputWrapper:
                'bg-transparent shadow-none border-1 border-gray-light-mid border-solid rounded-sm resize-y ',
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
          className="h-[52px] w-full rounded-md bg-orange-bright text-white"
          isDisabled={isSubmitting || totalPrice === 0}
        >
          Xác nhận đơn hàng
        </Button>
      </form>

      {/* Modal hiển thị danh sách địa chỉ */}
      <Modal
        size="md"
        placement="center"
        backdrop="opaque"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {isAddingNewAddress ? (
          <AddAddressForm
            id={profile.id}
            countAddressDirectory={addressDirectory.length}
            setIsAddingNewAddress={setIsAddingNewAddress}
          />
        ) : (
          <form onSubmit={(e) => handleSubmitAddress(e)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 uppercase">Danh sách địa chỉ</ModalHeader>
                  <ModalBody className="gap-4">
                    <div
                      className="cursor-pointer py-4 hover:bg-gray-lightest"
                      onClick={() => setIsAddingNewAddress(true)}
                    >
                      <div className="mx-auto mb-2 w-fit text-clamp-36">
                        <TbCirclePlus />
                      </div>

                      <p className="text-center text-clamp-16 font-bold">Thêm địa chỉ</p>
                    </div>
                    <div className="h-[336px] space-y-2 overflow-y-auto overscroll-y-contain scroll-smooth">
                      {addressDirectory.length > 0 ? (
                        addressDirectory.map((item) => (
                          <div key={item.id} className="group space-y-4 py-4">
                            <div className="flex items-stretch justify-between">
                              <div className="flex items-center gap-4">
                                <h3 className="line-clamp-1 text-clamp-24 font-bold capitalize">{item.fullname}</h3>

                                {item.isActive && (
                                  <div className="h-fit translate-y-[1px] border-1 border-solid border-orange-bright px-1 text-clamp-12 text-orange-bright">
                                    Mặc định
                                  </div>
                                )}
                              </div>
                              <Switch
                                size="sm"
                                // Địa chỉ mặc địch sẽ được chọn nếu phù hợp điều kiện
                                isSelected={selectedAddress?.addressId === item.id && selectedAddress?.isSelected}
                                onValueChange={(isSelected: boolean) => {
                                  // Khi switch được chọn thì truyền dữ liệu cần thiết cho selectedAddress để lưu trữ
                                  setSelectedAddress({ addressId: item.id, isSelected: isSelected });
                                }}
                              />
                            </div>

                            <div className="grid grid-cols-[128px_auto]">
                              <h5 className="text-clamp-16 font-bold">Địa chỉ</h5>
                              <p className="text-clamp-16 font-normal">{item.address}</p>
                            </div>

                            <div className="grid grid-cols-[128px_auto]">
                              <h5 className="text-clamp-16 font-bold">Số điện thoại</h5>
                              <p className="text-clamp-16 font-normal">{item.phone}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Chưa có địa chỉ</p>
                      )}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      variant="light"
                      onPress={() => {
                        onClose();
                        setSelectedAddress(undefined);
                      }}
                    >
                      Đóng
                    </Button>
                    <Button
                      isDisabled={!selectedAddress?.isSelected}
                      className="bg-orange-bright"
                      type="submit"
                      onPress={onClose}
                    >
                      Lưu
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </form>
        )}
      </Modal>
    </>
  );
}

export default CartTransaction;
