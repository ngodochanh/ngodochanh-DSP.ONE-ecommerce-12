import Banner from '@/components/Banner';
import Blogs from '@/components/Blogs';
import Category from '@/components/Category';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Independent from '@/components/Independent';
import Services from '@/components/Services';
import SpeialProducts from '@/components/SpeialProducts';
import TopBar from '@/components/TopBar';
import TrendyProducts from '@/components/TrendyProducts';

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Banner />
      <Category />
      <SpeialProducts />
      <Independent />
      <TrendyProducts />
      <Blogs />
      <Services />
      <Gallery />
    </>
  );
}
