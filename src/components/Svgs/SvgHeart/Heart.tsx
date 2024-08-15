import { SvgProps } from '../svg';

export default function Heart({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9938 5.91615C10.1944 3.81913 7.19377 3.25504 4.93923 5.17528C2.68468 7.09552 2.36727 10.3061 4.13778 12.5771C5.60984 14.4654 10.0648 18.4478 11.5249 19.7368C11.6882 19.881 11.7699 19.9531 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9531 12.2994 19.881 12.4628 19.7368C13.9229 18.4478 18.3778 14.4654 19.8499 12.5771C21.6204 10.3061 21.3417 7.07532 19.0484 5.17528C16.7551 3.27524 13.7933 3.81913 11.9938 5.91615Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
