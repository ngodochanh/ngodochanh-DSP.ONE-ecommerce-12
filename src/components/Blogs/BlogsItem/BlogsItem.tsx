import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  image: string;
  title: string;
  author: string;
  date: Date;
  text: string;
};

function BlogsItem({ blog }: { blog: Blog }) {
  const { image, title, author, date, text } = blog;

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href='/' className='block  w-full'>
      <div className='relative h-[350px] mb-6'>
        <Image src={image} alt={'product ' + title} layout='fill' objectFit='cover' loading='lazy' />
      </div>

      <h5 className='font-bold text-xl line-clamp-2 mb-[10px] h-[54px]'>{title}</h5>

      <div className='font-normal text-xs mb-[25px]'>
        By <span className='font-medium text-yellow-bright'>{author}</span> - {formattedDate}
      </div>

      <p className='font-light text-base text-gray-darker leading-[21.6px] text-justify line-clamp-3'>{text}</p>
    </Link>
  );
}

export default BlogsItem;
