import React from 'react';
import { SvgProps } from '../svg';

function ArrowRight({ className }: SvgProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 20 13' fill='none'>
      <path
        d='M19.0928 6.99898C19.4201 6.67176 19.4201 6.14123 19.0928 5.814L13.7604 0.481597C13.4332 0.154374 12.9027 0.154374 12.5754 0.481597C12.2482 0.80882 12.2482 1.33935 12.5754 1.66658L17.3154 6.40649L12.5754 11.1464C12.2482 11.4736 12.2482 12.0042 12.5754 12.3314C12.9027 12.6586 13.4332 12.6586 13.7604 12.3314L19.0928 6.99898ZM0.625 7.2444L18.5003 7.2444V5.56859L0.625 5.56859L0.625 7.2444Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ArrowRight;
