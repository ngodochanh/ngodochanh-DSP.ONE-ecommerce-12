import { SvgProps } from '../svg';

export default function ArrowDropDown({ className }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 18 19' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <rect fill='none' transform='translate(0 0.5)' />
      <path d='M5.25 8L9 11.75L12.75 8H5.25Z' fill='currentColor' />
    </svg>
  );
}
