import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng Ký | DSP.ONE',
  description:
    'Tạo tài khoản DSP.ONE để khám phá và mua sắm các sản phẩm chất lượng. Đăng ký ngay để truy cập vào các tính năng cá nhân hóa và ưu đãi độc quyền.',
};
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
