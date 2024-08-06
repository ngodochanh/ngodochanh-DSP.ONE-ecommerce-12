import config from '@/config';
import Link from 'next/link';

type LogoProps = {
  textColor?: string; // màu sắc của chữ
  className?: string;
};

function Logo({ textColor = 'text-black', className }: LogoProps) {
  return (
    <Link href={config.routes.home}>
      {' '}
      <div className={`font-bold text-clamp-40 ${textColor} ${className} `}>DSP.ONE</div>
    </Link>
  );
}

export default Logo;
