export default function ChevronRight({ size = '25', className }: { size?: string; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={'' + (+size - 1)}
      height={size}
      className={className}
      viewBox='0 0 24 25'
      fill='none'
    >
      <g clipPath='url(#clip0_128_4384)'>
        <path
          d='M9.99984 6.66455L8.58984 8.07455L13.1698 12.6646L8.58984 17.2546L9.99984 18.6646L15.9998 12.6646L9.99984 6.66455Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_128_4384'>
          <rect width={'' + (+size - 1)} height={'' + (+size - 1)} fill='none' transform='translate(0 0.664551)' />
        </clipPath>
      </defs>
    </svg>
  );
}
