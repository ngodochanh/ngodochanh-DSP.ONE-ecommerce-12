import Header from './Header';
import { Store } from '@/components/Store';
import TopBar from '@/components/TopBar';
import { NextUIProvider } from '@nextui-org/react';

const NextUIProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <Store>
        <div className="mx-auto max-w-[1920px]">
          <TopBar />
          <Header />
          <main>{children}</main>
        </div>
      </Store>
    </NextUIProvider>
  );
};

export default NextUIProviderComponent;
