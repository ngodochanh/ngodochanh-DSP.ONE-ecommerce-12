import Link from 'next/link';

type LogoProps = {
  locale: string;
  textColor?: string; // màu sắc của chữ
  className?: string;
};

function Logo({ locale, textColor = 'text-black', className }: LogoProps) {
  return (
    <Link href={`${locale}/${process.env.HOME}`}>
      <div className={`text-clamp-40 font-bold ${textColor} ${className} `}>DSP.ONE</div>
    </Link>
  );
}

export default Logo;
