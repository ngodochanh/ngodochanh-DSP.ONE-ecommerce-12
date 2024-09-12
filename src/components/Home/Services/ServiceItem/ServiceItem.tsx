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
    <div className="flex gap-x-[10px] py-[15px]">
      <Icon className="h-full w-clamp-50" />

      <div>
        <h5 className="mb-[1.59px] text-clamp-18 font-bold uppercase">{title}</h5>
        <p className="text-clamp-15 font-normal">{desc}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
