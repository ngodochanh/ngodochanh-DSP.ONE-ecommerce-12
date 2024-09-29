import { actions, useStore } from '@/components/Store';
import { ICustomer } from '@/models';
import { addressDirectorySchema, IAddressDirectorySchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch, Textarea } from '@nextui-org/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCircleUser, FaPhoneVolume } from 'react-icons/fa6';

function AddAddressForm({
  id,
  countAddressDirectory,
  setIsAddingNewAddress,
}: {
  id: ICustomer['id']; // id của người dùng đăng nhập (dùng để thêm id của người dùng vào địa chỉ mới)
  countAddressDirectory: number; // lấy độ dài của mảng địa chỉ trong data (dùng để tạo id của địa chỉ mới)
  setIsAddingNewAddress: Dispatch<SetStateAction<boolean>>; // đặt trạng thái hiển thị thêm mới hoặc danh sách địa chỉ của người dùng
}) {
  const { dispatch } = useStore();

  // Địa chỉ mặc định
  const [isDefaultAddressSelected, setIsDefaultAddressSelected] = useState(false);

  // Hook form với xác thực schema
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IAddressDirectorySchema>({
    resolver: zodResolver(addressDirectorySchema),
    defaultValues: {
      fullname: '',
      phone: '',
      address: '',
    },
  });

  // Gửi biểu mẫu
  const onSubmit = (data: IAddressDirectorySchema) => {
    const addressPayload = {
      ...data,
      isActive: isDefaultAddressSelected,
      id: 'address' + countAddressDirectory + 1,
      id_customer: id,
    };
    dispatch(actions.addAddressDirectory(addressPayload));
    reset();
    setIsAddingNewAddress(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase">Thêm địa chỉ</ModalHeader>
            <ModalBody>
              <Input
                radius="sm"
                type="text"
                label="Họ và tên"
                placeholder="Nhập tên đầy đủ của bạn"
                labelPlacement="outside"
                startContent={<FaCircleUser className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
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
                startContent={<FaPhoneVolume className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
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

              <Switch isSelected={isDefaultAddressSelected} onValueChange={setIsDefaultAddressSelected}>
                Đặt địa chỉ làm mặc định
              </Switch>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="light"
                onPress={() => {
                  onClose();
                  setIsAddingNewAddress(false);
                }}
              >
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
  );
}

export default AddAddressForm;
