type LogoProps = {
  textColor?: string; // màu sắc của chữ
  className?: string;
};

function Logo({ textColor = 'text-black', className }: LogoProps) {
  return <div className={`font-bold text-clamp-40 ${textColor} ${className} `}>DSP.ONE</div>;
}

export default Logo;
