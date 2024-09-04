import { SvgProps } from '../svg';

export default function TruckLight({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 24 20' fill='none'>
      <g clipPath='url(#clip0_222_4708)'>
        <path d='M16 1H1V14H16V1Z' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M16 6H20L23 9V14H16V6Z' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M5.5 19C6.88071 19 8 17.8807 8 16.5C8 15.1193 6.88071 14 5.5 14C4.11929 14 3 15.1193 3 16.5C3 17.8807 4.11929 19 5.5 19Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.5 19C19.8807 19 21 17.8807 21 16.5C21 15.1193 19.8807 14 18.5 14C17.1193 14 16 15.1193 16 16.5C16 17.8807 17.1193 19 18.5 19Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_222_4708'>
          <rect width='24' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
