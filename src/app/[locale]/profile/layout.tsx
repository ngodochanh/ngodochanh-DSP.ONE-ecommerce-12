import type { Metadata } from 'next';
import ProfileSidebar from './ProfileSidebar';
import { ILanguage } from '@/models';

export const metadata: Metadata = {
  title: 'Thông Tin Tài Khoản | DSP.ONE',
  description:
    'Trang thông tin cá nhân của bạn trên DSP.ONE, nơi bạn có thể xem và chỉnh sửa thông tin tài khoản, cập nhật hồ sơ, và quản lý các thiết lập cá nhân.',
};

export default function ProfileLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: ILanguage['name'];
  };
}) {
  return (
    <div className="max-container py-12">
      <div className="grid w-full grid-cols-12 gap-6">
        <ProfileSidebar locale={locale} />

        <div className="col-span-12 md:col-span-9 md:col-start-4">{children}</div>
      </div>
    </div>
  );
}
