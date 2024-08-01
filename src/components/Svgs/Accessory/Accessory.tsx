export default function Accessory({ size = '81', className }: { size?: string; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={'' + (+size + 1)}
      className={className}
      viewBox='0 0 81 80'
      fill='none'
    >
      <path
        d='M40.1987 77.1429C54.4003 77.1429 65.9129 65.6302 65.9129 51.4286C65.9129 37.227 54.4003 25.7144 40.1987 25.7144C25.9971 25.7144 14.4844 37.227 14.4844 51.4286C14.4844 65.6302 25.9971 77.1429 40.1987 77.1429Z'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M48.7693 2.85718L54.4835 8.57146L40.1978 25.7143L25.9121 8.57146L31.6264 2.85718H48.7693Z'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
