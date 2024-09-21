import Banner from '@/components/Banner';
import { Blogs, Category, Gallery, Independent, Services, SpeialProducts, TrendyProducts } from '@/components/Home';
import Footer from '@/components/Layout/Footer';

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  return (
    <>
      <Banner />

      <div className="max-container">
        <Category />
        <SpeialProducts />
      </div>

      <Independent />

      <div className="max-container">
        <TrendyProducts />
        <Blogs />
        <Services />
      </div>

      <Gallery />
      <Footer locale={locale} />
    </>
  );
}
