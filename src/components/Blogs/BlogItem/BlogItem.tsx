import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  image: string;
  title: string;
  author: string;
  date: Date;
  text: string;
};

type BlogItemProps = {
  blog: Blog;
};

function BlogItem({ blog }: BlogItemProps) {
  const { image, title, author, date, text } = blog;

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href='/' className='block  w-full'>
      <div className='relative h-[350px] mb-6'>
        <Image
          src={image}
          alt={'product ' + title}
          fill
          sizes='(max-width: 640px) 100vw, 50vw'
          loading='lazy'
          className='object-cover'
        />
      </div>

      <h5 className='font-bold text-clamp-20 line-clamp-2 mb-[10px] h-[54px]'>{title}</h5>

      <div className='font-normal text-clamp-12 mb-[25px]'>
        By <span className='font-medium text-yellow-bright'>{author}</span> - {formattedDate}
      </div>

      <p className='font-light text-clamp-16 text-gray-darker leading-[21.6px] text-justify line-clamp-3'>{text}</p>
    </Link>
  );
}

export default BlogItem;
