import type { Metadata } from 'next';
import localFont from 'next/font/local';
//
import './globals.css';
import { NexTUIProviders } from '../providers';
import { ProductStore } from '@/components/ProductStore';
import Script from 'next/script';
// Components
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import { idJsonObject } from '@/json_ld';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const SVN_GILROY = localFont({
  src: [
    {
      path: '../../assets/fonts/SVN-Gilroy-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/SVN-Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/SVN-Gilroy-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/SVN-Gilroy-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/SVN-Gilroy-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-svg-gilroy',
});

export const metadata: Metadata = {
  title: 'DSP.ONE - Thương mại điện tử thời trang',
  description:
    'DSP.ONE là điểm đến tuyệt vời của bạn cho những xu hướng thời trang mới nhất và trang phục chất lượng cao. Khám phá bộ sưu tập được tuyển chọn với quần áo, phụ kiện và giày dép thời trang, được thiết kế để giúp bạn luôn dẫn đầu trong thế giới thời trang. Cho dù bạn đang tìm kiếm trang phục thường ngày sành điệu hay những bộ đồ sang trọng cho buổi tối, DSP.ONE mang đến trải nghiệm mua sắm liền mạch với các bộ sưu tập độc quyền, gợi ý cá nhân hóa và dịch vụ chăm sóc khách hàng hàng đầu. Hãy khám phá lựa chọn thời trang tiên tiến của chúng tôi và nâng tầm tủ đồ của bạn cùng chúng tôi hôm nay',
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={SVN_GILROY.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NexTUIProviders>
            <ProductStore>
              <div className='max-w-[1920px] mx-auto'>
                <TopBar />
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
            </ProductStore>
          </NexTUIProviders>
        </NextIntlClientProvider>

        <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }}></Script>
      </body>
    </html>
  );
}
