import type { Metadata } from 'next';
import localFont from 'next/font/local';
//
import './globals.css';
import { NexTUIProviders } from '../providers';
import { ProductStore } from '@/components/ProductStore';
// Components
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const SVN_GILROY = localFont({
  src: [
    {
      path: '../../../public/fonts/SVN-Gilroy-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SVN-Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SVN-Gilroy-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SVN-Gilroy-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SVN-Gilroy-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-svg-gilroy',
});

export const metadata: Metadata = {
  title: 'DSP.ONE - Fashion Ecommerce',
  description:
    "DSP.ONE is your ultimate destination for the latest fashion trends and high-quality apparel. Discover a curated collection of stylish clothing, accessories, and footwear designed to keep you at the forefront of fashion. Whether you're looking for chic everyday wear or elegant evening outfits, DSP.ONE offers a seamless shopping experience with exclusive collections, personalized recommendations, and top-notch customer service. Explore our fashion-forward selection and elevate your wardrobe with us today.",
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
      </body>
    </html>
  );
}
