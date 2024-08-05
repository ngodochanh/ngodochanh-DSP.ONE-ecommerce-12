type Service = {
  key: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
};

type ServiceItemProps = {
  service: Service;
};

function ServiceItem({ service }: ServiceItemProps) {
  const { title, desc, Icon } = service;
  return (
    <div className='flex gap-x-[10px] py-[15px]'>
      <Icon className='w-clamp-50' />

      <div>
        <h5 className='font-bold text-clamp-18 uppercase mb-[1.59px]'>{title}</h5>
        <p className='font-normal text-clamp-15'>{desc}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
