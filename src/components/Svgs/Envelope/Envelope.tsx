function Envelope({ size = '28px', className }: { size?: string; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      viewBox='0 0 568.601 568.601'
    >
      <rect x='28.861' y='92.553' fill='currentColor' width='511.424' height='350.56' />
      <g>
        <g>
          <polygon
            fill='bg-transparent'
            points='284.285,319.369 3.805,147.945 16.333,127.465 284.237,291.209 552.157,126.217     564.749,146.649   '
          />

          <rect
            x='-45.389'
            y='342.94'
            transform='matrix(-0.6225 0.7826 -0.7826 -0.6225 439.5909 497.8454)'
            fill='bg-transparent'
            width='290.236'
            height='24'
          />

          <rect
            x='456.912'
            y='209.842'
            transform='matrix(-0.7829 0.6222 -0.6222 -0.7829 1056.8655 341.1133)'
            fill='bg-transparent'
            width='24.001'
            height='290.249'
          />
        </g>
      </g>
    </svg>
  );
}

export default Envelope;
