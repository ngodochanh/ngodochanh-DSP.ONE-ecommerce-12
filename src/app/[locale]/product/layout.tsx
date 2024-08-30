import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <Banner />
      {children}
    </>
  );
}
