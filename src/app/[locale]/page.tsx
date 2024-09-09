import Banner from '@/components/Banner';
import Blogs from '@/components/Blogs';
import Category from '@/components/Category';
import Gallery from '@/components/Gallery';
import Independent from '@/components/Independent';
import Services from '@/components/Services';
import SpeialProducts from '@/components/SpeialProducts';
import TrendyProducts from '@/components/TrendyProducts';

export default function Home() {
  return (
    <>
      <Banner />

      <div className='max-container'>
        <Category />
        <SpeialProducts />
      </div>

      <Independent />

      <div className='max-container'>
        <TrendyProducts />
        <Blogs />
        <Services />
      </div>

      <Gallery />
    </>
  );
}
