import { SvgProps } from '../svg';

function Payment({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 50 51' fill='none'>
      <path
        d='M41.666 8.6626H8.33268C6.02018 8.6626 4.18685 10.5168 4.18685 12.8293L4.16602 37.8293C4.16602 40.1418 6.02018 41.9959 8.33268 41.9959H41.666C43.9785 41.9959 45.8327 40.1418 45.8327 37.8293V12.8293C45.8327 10.5168 43.9785 8.6626 41.666 8.6626ZM41.666 37.8293H8.33268V25.3293H41.666V37.8293ZM41.666 16.9959H8.33268V12.8293H41.666V16.9959Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Payment;
