'use client';

import AddressUpdateModal from '@/components/AddressUpdateModal';
import { useStore } from '@/components/Store';
import TitleHeader from '@/components/TitleHeader';
import { FaRegEdit } from 'react-icons/fa';
import { TbCirclePlus } from 'react-icons/tb';

export default function Address({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const {
    state: { addressDirectory },
  } = useStore();

  return (
    <>
      <TitleHeader title="Sổ địa chỉ" />

      <div className="space-y-6">
        <AddressUpdateModal>
          <div className="py-4 hover:bg-gray-lightest">
            <div className="mx-auto mb-2 w-fit text-clamp-36">
              <TbCirclePlus />
            </div>

            <p className="text-center text-clamp-16 font-bold">Thêm địa chỉ</p>
          </div>
        </AddressUpdateModal>

        <div className="h-[432px] space-y-2 overflow-y-auto overscroll-y-contain scroll-smooth">
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

                  <AddressUpdateModal addressData={item}>
                    <div className="grid h-full w-10 bg-transparent text-right text-clamp-24 hover:text-orange-bright">
                      <FaRegEdit className="ml-auto self-end" />
                    </div>
                  </AddressUpdateModal>
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
      </div>
    </>
  );
}
