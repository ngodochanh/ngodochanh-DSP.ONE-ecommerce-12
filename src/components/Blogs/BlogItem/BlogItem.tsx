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
    <Link href='/' className='block group h-full'>
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

      <div className='flex flex-col'>
        <h5 className='font-bold text-clamp-20 mb-[10px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out line-clamp-1'>
          {t(`list.blog${id}.title`)}
        </h5>
        <div>
          <div className='font-normal text-clamp-12 mb-[25px]'>
            {t('created_by')} <span className='font-medium text-yellow-bright'>{t(`list.blog${id}.author`)}</span> -{' '}
            {formattedDate}
          </div>

          <p className='font-light text-clamp-16 text-gray-darker text-justify line-clamp-3'>
            {t(`list.blog${id}.description`)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
