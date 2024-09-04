import { SvgProps } from '../svg';

function Plus({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 17 17' fill='none'>
      <path
        d='M17 9.83914H9.71429V16.7937H7.28571V9.83914H0V7.52095H7.28571V0.566406H9.71429V7.52095H17V9.83914Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Plus;
