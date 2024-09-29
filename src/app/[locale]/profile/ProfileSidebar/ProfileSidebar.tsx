'use client';

import { CgCloseO } from 'react-icons/cg';
import { useStore } from '@/components/Store';
import Link from 'next/link';
import { MENU_LIST } from '@/app/[locale]/profile/constants';
import { Avatar } from '@nextui-org/react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useScrollLock from '@/hooks/useScrollLock';

function ProfileSidebar({ locale }: { locale: string }) {
  // Lấy đường dẫn hiện tại
  const path = usePathname();
  //
  const {
    state: { profile },
  } = useStore();
  // Bật tắt sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Khóa cuộn khi mở sidebar
  useScrollLock(isSidebarOpen);

  return (
    <>
      {/* Nút để bật menu */}
      <div
        className="group fixed right-2 top-1/3 z-10 cursor-pointer rounded bg-white p-1 pr-0 text-white sm:right-4 md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <div className="h-10 w-10 rounded bg-orange-bright p-2 group-hover:opacity-50">
          <HiMiniBars3BottomRight className="h-full w-full" />
        </div>
      </div>

      {/* Overlay sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-all duration-500 ease-in-out md:hidden ${
          isSidebarOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } `}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 max-w-[360px] bg-white px-2 transition-all duration-500 ease-in-out sm:px-4 md:pointer-events-auto md:static md:inset-[unset] md:right-[unset] md:z-0 md:col-span-3 md:w-full md:translate-x-0 md:px-0 md:opacity-100 ${isSidebarOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
      >
        {/* Floating menu */}
        <div
          className="mb-7 ml-auto mt-8 cursor-pointer text-3xl hover:text-orange-bright md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <CgCloseO className="ml-auto" />
        </div>

        {/* Customer Info */}
        <div className="mb-4 flex gap-4 md:flex-col md:items-center md:gap-2 lg:flex-row lg:items-start lg:gap-4">
          <Avatar src={profile.image} classNames={{ base: 'w-clamp-70 h-clamp-70' }} />

          <div className="mt-auto h-fit flex-1">
            <p className="text-clamp-16 font-normal">Tài khoản của</p>
            <h3 className="line-clamp-1 text-clamp-24 font-medium capitalize">
              {profile.fullname ? profile.fullname : 'Chưa có tên'}
            </h3>
          </div>
        </div>

        {/* Menu */}
        <ul>
          {MENU_LIST.map((item) => {
            const Comp = item.icon;
            const localizedPath =
              item.path === process.env.PROFILE! ? item.path : `${process.env.PROFILE!}${item.path}`;
            const isActive = path === `/${locale}${localizedPath}`;
            return (
              <li key={item.id} className="border-b border-b-black last:border-b-0">
                <Link
                  href={`/${locale}${localizedPath}`}
                  className={`flex items-center gap-x-4 py-[17px] text-clamp-16 font-normal ${isActive ? 'text-orange-bright' : ''}`}
                  onClick={() => {
                    setIsSidebarOpen(false);
                  }}
                >
                  <Comp className="text-clamp-20" />
                  <p>{item.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProfileSidebar;
