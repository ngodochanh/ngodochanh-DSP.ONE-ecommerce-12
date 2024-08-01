export default function Pants({ size = '81', className }: { size?: string; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={'' + (+size - 1)}
      className={className}
      viewBox='0 0 81 80'
      fill='none'
    >
      <path
        d='M47.4674 19.1666L40.8008 6.66663L34.1341 19.1666M40.8008 31.6666L55.8008 63.3333H70.8008L64.1341 6.66663H17.4674L10.8008 63.3333H25.8008L40.8008 31.6666ZM57.4674 63.3333L59.1341 73.3333H69.1341V63.3333H57.4674ZM22.4674 73.3333H12.4674V63.3333H24.1341L22.4674 73.3333Z'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
