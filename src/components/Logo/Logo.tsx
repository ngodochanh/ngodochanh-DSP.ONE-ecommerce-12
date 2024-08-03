type LogoProps = {
  textColor?: string; // màu sắc của chữ
  className?: string;
};

function Logo({ textColor = 'text-black', className }: LogoProps) {
  return <div className={`font-bold text-[40px] ${textColor} ${className} `}>DSP.ONE</div>;
}

export default Logo;
