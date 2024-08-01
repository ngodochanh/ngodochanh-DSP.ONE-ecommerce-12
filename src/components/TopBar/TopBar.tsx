import { Language, PhoneCall } from '@/components/Svgs';
import Selector from '../Selector';
import { LANGUAGES } from './constants';

function TopBar() {
  return (
    <div className='bg-black py-[1.5px]' style={{ height: 'var(--top-bar-height)' }}>
      <div className='max-container flex-between-center text-sm font-normal text-white '>
        <div className='flex-center gap-x-[5px]'>
          <PhoneCall />
          <p>
            <span className='hidden sm:inline'>Hotline:</span> (+84) 903883083
          </p>
        </div>

        <p className='hidden md:block'>Follow Us and get a chance to win 80% off</p>

        <div className='flex-center gap-x-[5px]'>
          <Language />
          Language:
          <Selector data={LANGUAGES} selected={LANGUAGES[0]} colorText='text-white' bgColor='bg-black' right={true} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
