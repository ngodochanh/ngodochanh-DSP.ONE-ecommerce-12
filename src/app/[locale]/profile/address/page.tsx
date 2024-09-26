import TitleHeader from '@/components/TitleHeader';

export default function Address({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  return (
    <>
      <TitleHeader title="Sổ địa chỉ" />
    </>
  );
}
