type LogoProps = {
  textColor?: string; // màu sắc của chữ
};

function Logo({ textColor = 'text-black' }: LogoProps) {
  return <div className={`font-bold text-[40px] ${textColor} `}>DSP.ONE</div>;
}

export default Logo;
