import { SvgProps } from '../svg';

function Minus({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 20 3' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 1.16602C0 0.900799 0.0957791 0.646445 0.266267 0.458909C0.436754 0.271373 0.667985 0.166016 0.909091 0.166016H19.0909C19.332 0.166016 19.5632 0.271373 19.7337 0.458909C19.9042 0.646445 20 0.900799 20 1.16602C20 1.43123 19.9042 1.68559 19.7337 1.87312C19.5632 2.06066 19.332 2.16602 19.0909 2.16602H0.909091C0.667985 2.16602 0.436754 2.06066 0.266267 1.87312C0.0957791 1.68559 0 1.43123 0 1.16602Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Minus;
