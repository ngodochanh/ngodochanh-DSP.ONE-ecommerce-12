import type { Metadata } from 'next';
import ProfileSidebar from './ProfileSidebar';

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
    locale: string;
  };
}) {
  return (
    <div className="max-container py-12">
      <div className="grid w-full grid-cols-12 gap-6">
        <ProfileSidebar locale={locale} />

        <div className="col-span-12 xl:col-span-9 xl:col-start-4">{children}</div>
      </div>
    </div>
  );
}
