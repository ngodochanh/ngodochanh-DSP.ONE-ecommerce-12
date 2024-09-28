import { FaRegEdit } from 'react-icons/fa';
import { useStore } from '@/components/Store';
import AddressUpdateModal from '@/components/AddressUpdateModal';
import { useEffect, useState } from 'react';
import { IAddressDirectory } from '@/models';

function CartCustomerInfo() {
  const {
    state: { addressDirectory },
  } = useStore();
  // Địa chỉ mặc định của người dùng
  const [activeAddress, setActiveAddress] = useState<IAddressDirectory | undefined>(undefined);

  // useEffect để cập nhật activeAddress khi addressDirectory thay đổi
  useEffect(() => {
    const foundAddress = addressDirectory.find((item) => item.isActive);
    setActiveAddress(foundAddress);
  }, [addressDirectory]); // Chạy effect khi addressDirectory thay đổi

  return (
    <div className="bg-white-smoke px-[0] py-[30px] sm:px-[30px]">
      {/* Thông tin người dùng */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-clamp-24 font-semibold capitalize">Thông tin nhận hàng</h3>

        <AddressUpdateModal addressData={activeAddress}>
          <div className="grid h-full w-10 bg-transparent text-right text-clamp-24 hover:text-orange-bright">
            <FaRegEdit className="ml-auto self-end" />
          </div>
        </AddressUpdateModal>
      </div>

      <div className="flex flex-col justify-between gap-y-3 text-clamp-16 font-normal xl:flex-row">
        <div className="flex gap-x-[30px] sm:gap-x-[20px] md:gap-x-[30px]">
          <h4>{activeAddress?.fullname ? activeAddress?.fullname : 'Chưa có tên'}</h4>
          <p className='relative after:absolute after:-left-[calc(30px/2)] after:top-1/2 after:block after:h-4/6 after:w-[1px] after:-translate-y-1/2 after:bg-black after:content-[""] sm:after:-left-[calc(20px/2)] md:after:-left-[calc(30px/2)]'>
            {activeAddress?.phone ? activeAddress?.phone : 'Chưa có số điện thoại'}
          </p>
        </div>
        <p>{activeAddress?.address ? activeAddress?.address : 'Chưa có địa chỉ'}</p>
      </div>
    </div>
  );
}

export default CartCustomerInfo;
