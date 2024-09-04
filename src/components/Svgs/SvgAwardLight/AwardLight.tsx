import { SvgProps } from '../svg';

export default function AwardLight({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 16 24' fill='none'>
      <g clipPath='url(#clip0_222_4695)'>
        <path
          d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.21 13.8909L3 23.0009L8 20.0009L13 23.0009L11.79 13.8809'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_222_4695'>
          <rect width='16' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
