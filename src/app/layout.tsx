import type { Metadata } from 'next';
import localFont from 'next/font/local';
//
import './globals.css';
import { Providers } from './providers';
// Components
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@nextui-org/react';

const SVN_GILROY = localFont({
  src: [
    {
      path: '../../public/fonts/SVN-Gilroy-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN-Gilroy-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN-Gilroy-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN-Gilroy-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SVN-Gilroy-Bold.otf',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi'>
      <body className={SVN_GILROY.className}>
        <Providers>
          <div className='max-w-[1920px] mx-auto'>
            <TopBar />
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
