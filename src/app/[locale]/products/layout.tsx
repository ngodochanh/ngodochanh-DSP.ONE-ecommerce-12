import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sản Phẩm | DSP.ONE',
  description:
    'Khám phá các sản phẩm đa dạng với chất lượng cao và giá cả cạnh tranh tại DSP.ONE. Chúng tôi mang đến cho bạn các lựa chọn tuyệt vời cho mọi nhu cầu mua sắm.',
};

export default function ProductLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <>
      {children}
    </>
  );
}
