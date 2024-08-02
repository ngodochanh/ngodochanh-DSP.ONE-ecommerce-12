type Service = {
  key: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
};

function ServiceItem({ service }: { service: Service }) {
  const { title, desc, Icon } = service;
  return (
    <div className='flex gap-x-[10px] py-[15px]'>
      <Icon />

      <div>
        <h5 className='font-bold text-lg uppercase mb-[1.59px]'>{title}</h5>
        <p className='font-normal text-[15px]'>{desc}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
