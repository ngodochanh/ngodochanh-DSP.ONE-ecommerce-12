import { SvgProps } from '../svg';

export default function TimeLight({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 22 22' fill='none'>
      <g clipPath='url(#clip0_222_4717)'>
        <path
          d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M11 5V11L15 13' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <clipPath id='clip0_222_4717'>
          <rect width='22' height='22' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
