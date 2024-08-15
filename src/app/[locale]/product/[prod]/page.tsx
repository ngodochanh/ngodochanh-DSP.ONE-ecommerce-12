import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { prod: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const prod = params.prod;

  // const product = await fetch(`https://.../${prod}`).then((res) => res.json());

  return {
    title: prod,
  };
}

function Prod({ params }: { params: { prod: string } }) {
  return <div>Product: {params.prod}</div>;
}

export default Prod;
