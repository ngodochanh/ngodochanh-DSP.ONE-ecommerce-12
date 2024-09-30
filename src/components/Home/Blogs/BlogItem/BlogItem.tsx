import { IBlog } from '@/models';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function BlogItem({ blog }: { blog: IBlog }) {
  const { id, image, title, author, date, description } = blog;
  const t = useTranslations('blogs');
  const locale = useLocale();

  const formattedDate = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href="/" className="group block h-full">
      <div className="relative mb-6 h-[350px]">
        <Image
          src={image}
          alt={'product ' + title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h5 className="mb-[10px] line-clamp-1 text-clamp-20 font-bold transition-colors duration-300 ease-in-out group-hover:text-orange-bright">
          {t(`list.blog${id}.title`)}
        </h5>
        <div>
          <div className="mb-[25px] text-clamp-12 font-normal">
            {t('created_by')} <span className="font-medium text-orange-bright">{t(`list.blog${id}.author`)}</span> -{' '}
            {formattedDate}
          </div>

          <p className="line-clamp-3 text-justify text-clamp-16 font-light text-gray-darker">
            {t(`list.blog${id}.description`)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
