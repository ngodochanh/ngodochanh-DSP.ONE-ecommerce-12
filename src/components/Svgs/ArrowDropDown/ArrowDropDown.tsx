export default function ArrowDropDown({ size = '19', className }: { size?: string; className?: string }) {
  return (
    <svg
      width={'' + (+size - 1)}
      height={size}
      className={className}
      viewBox='0 0 18 19'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_127_4059)'>
        <path d='M5.25 8L9 11.75L12.75 8H5.25Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_127_4059'>
          <rect width='18' height='18' fill='currentColor' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
}
