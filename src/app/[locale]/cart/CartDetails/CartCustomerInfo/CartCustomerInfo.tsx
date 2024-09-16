import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/input';
import { FaRegEdit } from 'react-icons/fa';
import { FaCircleUser, FaPhoneVolume } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TCustomer } from '@/type';
import { actions, useStore } from '@/components/Store';

// Schema xác thực cho thông tin khách hàng
const customerInfoSchema = z.object({
  fullname: z.string().nonempty('Họ và tên không được để trống'),
  phone: z
    .string()
    .nonempty('Số điện thoại không được để trống')
    .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ'),
  address: z.string().nonempty('Địa chỉ không được để trống').min(10, 'Ít nhất 10 ký tự'),
});

function CartCustomerInfo() {
  const {
    state: { customer },
    dispatch,
  } = useStore();
  // Hook form với xác thực schema
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCustomer>({
    defaultValues: customer,
    resolver: zodResolver(customerInfoSchema),
  });

  // Trạng thái modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Mở modal và reset giá trị biểu mẫu
  const handleOpenModal = () => {
    reset(customer);
    onOpen();
  };

  // Gửi biểu mẫu
  const onSubmit = (data: TCustomer) => {
    dispatch(actions.updateUser(data));
  };

  return (
    <div className="bg-white-smoke px-[0] py-[30px] sm:px-[30px]">
      {/* Thông tin người dùng */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-clamp-24 font-semibold capitalize">Thông tin nhận hàng</h3>

        <Button
          radius="none"
          onPress={handleOpenModal}
          className="h-fit min-w-fit bg-transparent p-0 !text-clamp-24 hover:text-opacity-80"
        >
          <FaRegEdit />
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-y-3 text-clamp-16 font-normal xl:flex-row">
        <div className="flex gap-x-[30px] sm:gap-x-[20px] md:gap-x-[30px]">
          <h4>{customer.fullname}</h4>
          <p className='relative after:absolute after:-left-[calc(30px/2)] after:top-1/2 after:block after:h-4/6 after:w-[1px] after:-translate-y-1/2 after:bg-black after:content-[""] sm:after:-left-[calc(20px/2)] md:after:-left-[calc(30px/2)]'>
            {customer.phone}
          </p>
        </div>
        <p>{customer.address}</p>
      </div>
      {/* Modal */}
      <Modal
        size="md"
        placement="center"
        backdrop="opaque"
        isOpen={isOpen}
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
        onOpenChange={onOpenChange}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 uppercase">Sửa thông tin nhận hàng</ModalHeader>
                <ModalBody>
                  <Input
                    radius="sm"
                    type="text"
                    label="Họ và tên"
                    placeholder="Nhập tên đầy đủ của bạn"
                    labelPlacement="outside"
                    startContent={
                      <FaCircleUser className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                    }
                    isClearable
                    isInvalid={!!errors.fullname}
                    errorMessage={errors.fullname?.message as string}
                    {...register('fullname')}
                  />

                  <Input
                    radius="sm"
                    type="text"
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại của bạn"
                    labelPlacement="outside"
                    startContent={
                      <FaPhoneVolume className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                    }
                    isClearable
                    isInvalid={!!errors.phone}
                    errorMessage={errors.phone?.message as string}
                    {...register('phone')}
                  />

                  <Textarea
                    radius="sm"
                    label="Địa chỉ nhận hàng"
                    placeholder="Nhập địa chỉ nhận hàng của bạn"
                    labelPlacement="outside"
                    maxRows={3}
                    isInvalid={!!errors.address}
                    errorMessage={errors.address?.message as string}
                    {...register('address')}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
                    Đóng
                  </Button>
                  <Button isDisabled={isSubmitting} className="bg-yellow-vivid" type="submit">
                    Lưu
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
}

export default CartCustomerInfo;
