import Footer from '@/components/Layout/Footer';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
