import { SvgProps } from '../svg';

export default function ProtectLight({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 22 20' fill='none'>
      <g clipPath='url(#clip0_222_4701)'>
        <path
          d='M3 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V9C21 11.6522 19.9464 14.1957 18.0711 16.0711C16.1957 17.9464 13.6522 19 11 19C9.68678 19 8.38642 18.7413 7.17317 18.2388C5.95991 17.7362 4.85752 16.9997 3.92893 16.0711C2.05357 14.1957 1 11.6522 1 9V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M7 8L11 12L15 8' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <clipPath id='clip0_222_4701'>
          <rect width='22' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
