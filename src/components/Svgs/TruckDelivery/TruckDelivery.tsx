function TruckDelivery({ size = '51', className }: { size?: string; className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={'' + (+size - 1)}
      height={size}
      className={className}
      viewBox='0 0 50 51'
      fill='none'
    >
      <path
        d='M37.5006 38.8709C39.2298 38.8709 40.6256 37.4751 40.6256 35.7459C40.6256 34.0168 39.2298 32.6209 37.5006 32.6209C35.7715 32.6209 34.3756 34.0168 34.3756 35.7459C34.3756 37.4751 35.7715 38.8709 37.5006 38.8709ZM40.6256 20.1209H35.4173V25.3293H44.709L40.6256 20.1209ZM12.5007 38.8709C14.2298 38.8709 15.6257 37.4751 15.6257 35.7459C15.6257 34.0168 14.2298 32.6209 12.5007 32.6209C10.7715 32.6209 9.37565 34.0168 9.37565 35.7459C9.37565 37.4751 10.7715 38.8709 12.5007 38.8709ZM41.6673 16.9959L47.9173 25.3293V35.7459H43.7506C43.7506 39.2043 40.959 41.9959 37.5006 41.9959C34.0423 41.9959 31.2507 39.2043 31.2507 35.7459H18.7507C18.7507 39.2043 15.959 41.9959 12.5007 41.9959C9.04232 41.9959 6.25065 39.2043 6.25065 35.7459H2.08398V12.8293C2.08398 10.5168 3.93815 8.6626 6.25065 8.6626H35.4173V16.9959H41.6673ZM6.25065 12.8293V31.5793H7.83398C8.97982 30.3084 10.6465 29.4959 12.5007 29.4959C14.3548 29.4959 16.0215 30.3084 17.1673 31.5793H31.2507V12.8293H6.25065ZM20.834 14.9126L28.1257 22.2043L20.834 29.4959V24.2876H10.4173V20.1209H20.834V14.9126Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default TruckDelivery;
