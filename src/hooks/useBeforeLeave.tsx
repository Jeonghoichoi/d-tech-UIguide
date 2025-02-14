import { useEffect } from 'react';

// 브라우저에서 벗어났을 경우 처리
const useBeforeLeave = (func: () => void) => {
  if (typeof func !== 'function') {
    return null;
  }
  const handle = (event: MouseEvent) => {
    // top으로 가면 func 함수 실행되게 처리
    const { clientY } = event;
    if (clientY <= 0) {
      func();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    };
  }, []);
};

export default useBeforeLeave;
