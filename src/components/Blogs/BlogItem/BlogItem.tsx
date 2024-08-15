import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  id: string;
  image: string;
  title: string;
  author: string;
  date: Date;
  description: string;
};

type BlogItemProps = {
  blog: Blog;
};

function BlogItem({ blog }: BlogItemProps) {
  const { id, image, title, author, date, description } = blog;
  const t = useTranslations('blogs');
  const locale = useLocale();

  const formattedDate = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href='/' className='block w-full group'>
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

      <h5 className='font-bold text-clamp-20 line-clamp-2 mb-[10px] h-[54px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out'>
        {t(`list.blog${id}.title`)}
      </h5>

      <div className='font-normal text-clamp-12 mb-[25px]'>
        {t('created_by')} <span className='font-medium text-yellow-bright'>{t(`list.blog${id}.author`)}</span> -{' '}
        {formattedDate}
      </div>

      <p className='font-light text-clamp-16 text-gray-darker leading-[21.6px] text-justify line-clamp-3 h-[64.8px]'>
        {t(`list.blog${id}.description`)}
      </p>
    </Link>
  );
}

export default BlogItem;
