import { Language, PhoneCall } from '@/components/Svgs';
import Selector from '@/components/Selector';
import { LANGUAGES } from './constants';

function TopBar() {
  return (
    <div className='bg-black py-[1.5px] text-clamp-14 font-normal' style={{ height: 'var(--top-bar-height)' }}>
      <div className='max-container flex-between-center text-white '>
        <div className='flex-center gap-x-[5px]'>
          <PhoneCall className='w-clamp-14' />
          <p>
            <span className='hidden sm:inline'>Hotline:</span> (+84) 903883083
          </p>
        </div>

        <p className='hidden md:block'>Follow Us and get a chance to win 80% off</p>

        <div className='flex-center gap-x-[5px]'>
          <Language className='w-clamp-14' />
          Language:
          <Selector data={LANGUAGES} selected={LANGUAGES[0]} colorText='text-white' bgColor='bg-black' right={true} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
