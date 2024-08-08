import { SvgProps } from '../svg';

export default function Menu({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 24 25' fill='currentColor'>
      <path
        d='M3 4.17578H21V6.17578H3V4.17578ZM9 11.1758H21V13.1758H9V11.1758ZM3 18.1758H21V20.1758H3V18.1758Z'
        fill='currentColor'
      />
    </svg>
  );
}
