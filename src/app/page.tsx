import Banner from '@/components/Banner';
import Category from '@/components/Category';
import Independent from '@/components/Independent';
import SpeialProducts from '@/components/SpeialProducts';
import TrendyProducts from '@/components/TrendyProducts';

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <SpeialProducts />
      <Independent />
      <TrendyProducts />
    </>
  );
}
