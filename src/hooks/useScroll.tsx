import { useEffect, useState } from 'react';

// 스크롤 처리 hook
const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<{}>({ x: 0, y: 0 });

  const onScroll = () => {
    setScrollPosition({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return scrollPosition;
};

export default useScroll;
