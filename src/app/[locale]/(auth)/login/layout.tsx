import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng Nhập | DSP.ONE',
  description:
    'Đăng nhập vào tài khoản DSP.ONE của bạn để quản lý đơn hàng, xem lịch sử mua sắm và truy cập vào các tính năng cá nhân hóa.',
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
