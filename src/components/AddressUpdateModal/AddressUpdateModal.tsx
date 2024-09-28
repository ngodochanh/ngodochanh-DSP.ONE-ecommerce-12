import { actions, useStore } from '@/components/Store';
import { IAddressDirectory } from '@/models';
import { addressDirectorySchema, IAddressDirectorySchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Switch,
} from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircleUser, FaPhoneVolume } from 'react-icons/fa6';

function AddressUpdateModal({ children, addressData }: { children: React.ReactNode; addressData?: IAddressDirectory }) {
  const {
    state: { addressDirectory, profile },
    dispatch,
  } = useStore();
  // Địa chỉ mặc định
  const [isDefaultAddress, setIsDefaultAddress] = useState(addressData?.isActive ?? false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Định nghĩa giá trị mặc định
  const defaultValues = {
    fullname: addressData?.fullname ?? '',
    phone: addressData?.phone ?? '',
    address: addressData?.address ?? '',
  };

  // Hook form với xác thực schema
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IAddressDirectorySchema>({
    resolver: zodResolver(addressDirectorySchema),
    defaultValues,
  });

  // Mở modal và reset giá trị biểu mẫu
  const handleOpenModal = () => {
    reset(defaultValues); // Sử dụng biến defaultValues
    setIsDefaultAddress(addressData?.isActive ?? false);
    onOpen();
  };

  // Gửi biểu mẫu
  const onSubmit = (data: IAddressDirectorySchema) => {
    // Nếu addressData có dữ liệu nghĩa là chỉnh sửa, ngược lại là thêm mới
    if (addressData) {
      const addressPayload = {
        ...data,
        id: addressData?.id,
        id_customer: addressData?.id_customer,
        isActive: isDefaultAddress,
      };
      dispatch(actions.updateAddressDirectory(addressPayload));
    } else {

      const addressPayload = {
        ...data,
        isActive: isDefaultAddress,
        id: 'address' + addressDirectory.length + 1,
        id_customer: profile.id,
      };
      dispatch(actions.addAddressDirectory(addressPayload));
    }
  };

  return (
    <>
      <div onClick={handleOpenModal} className="cursor-pointer">
        {children}
      </div>

      {/* Modal */}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 uppercase">
                  {addressData ? 'Sửa địa chỉ' : 'Thêm địa chỉ'}
                </ModalHeader>
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

                  <Switch isSelected={isDefaultAddress} onValueChange={setIsDefaultAddress}>
                    Đặt địa chỉ làm mặc định
                  </Switch>
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
                    Đóng
                  </Button>
                  <Button isDisabled={isSubmitting} className="bg-orange-bright" type="submit">
                    Lưu
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default AddressUpdateModal;
