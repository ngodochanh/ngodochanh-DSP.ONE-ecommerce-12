import { Divider } from '@nextui-org/divider';

type SegmentProps = {
  title: string;
};

function Segment({ title }: SegmentProps) {
  return (
    <div className='max-container flex gap-x-10 py-5'>
      <strong className='w-fit text-clamp-24'>{title}</strong>
      <Divider className='my-auto bg-black flex-1' />
    </div>
  );
}

export default Segment;
