import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ProviderNextUI from './about/provider';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi'>
      <body className={SVN_GILROY.className}>
        <ProviderNextUI>
          <div className='max-w-[1920px] mx-auto'>
            <TopBar />
            <Header />
            {children}
            <Footer />
          </div>
        </ProviderNextUI>
      </body>
    </html>
  );
}
