import { useEffect } from 'react';

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    // Nếu là true, thiết lập body không cuộn
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function để khôi phục lại thuộc tính `overflow` khi component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

export default useScrollLock;
