import { CgCloseO } from 'react-icons/cg';
import { useStore } from '@/components/Store';
import Link from 'next/link';
import { MENU_LIST } from '@/app/[locale]/profile/constants';
import { Avatar } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

function ProfileSidebar({ setIsMenuOpen }: { setIsMenuOpen: Dispatch<SetStateAction<boolean>> }) {
  const {
    state: { profile },
  } = useStore();

  return (
    <>
      {/* Floating menu */}
      <div
        className="mb-7 ml-auto mt-8 cursor-pointer text-3xl hover:text-orange-bright xl:hidden"
        onClick={() => setIsMenuOpen(false)}
      >
        <CgCloseO className="ml-auto" />
      </div>
      {/* Customer Info */}
      <div className="mb-4 flex gap-x-4">
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
          return (
            <li key={item.id} className="border-b-solid border-b-1 border-b-black last:border-b-0">
              <Link href={''} className="border-b-solid flex items-center gap-x-4 py-[17px] text-clamp-16 font-normal">
                <Comp className="text-clamp-20" />
                <p>{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProfileSidebar;
