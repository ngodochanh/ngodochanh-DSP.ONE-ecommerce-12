import { Divider } from '@nextui-org/divider';

type SegmentProps = {
  title: string;
  className?: string;
};

function Segment({ title, className = '' }: SegmentProps) {
  return (
    <div className={`${className} flex gap-x-10`}>
      <strong className="w-fit text-clamp-24 capitalize">{title}</strong>
      <Divider className="my-auto flex-1 bg-black" />
    </div>
  );
}

export default Segment;
