import { SERVICE_LIST } from './constants';
import ServiceItem from './ServiceItem';

function Services() {
  return (
    <div className='max-container flex justify-between flex-wrap gap-y-[16px] gap-x-[32px] my-[60px]'>
      {SERVICE_LIST.map((service) => (
        <ServiceItem key={service.key} service={service} />
      ))}
    </div>
  );
}

export default Services;
