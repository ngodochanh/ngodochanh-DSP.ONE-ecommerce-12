import { useLocale } from 'next-intl';

function getLocalizedPath(path: string): string {
  const locale = useLocale(); // Lấy ngôn ngữ hiện tại
  return `/${locale}${path == '/' ? '' : path}`;
}

export default getLocalizedPath;
