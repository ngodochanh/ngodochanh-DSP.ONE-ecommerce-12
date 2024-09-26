import Footer from './Footer';
import Header from './Header';
import TopBar from './TopBar';
import { Store } from '@/components/Store';
import { NextUIProvider } from '@nextui-org/react';

const NextUIProviderComponent = ({ children, locale }: { children: React.ReactNode; locale: string }) => {
  return (
    <NextUIProvider locale={locale}>
      <Store>
        <div className="mx-auto max-w-[1920px]">
          <TopBar />
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </div>
      </Store>
    </NextUIProvider>
  );
};

export default NextUIProviderComponent;
