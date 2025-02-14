import { useRef, useState } from 'react';

// FullScreen hook
const useFullScreen = () => {
  const element = useRef<any>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    if (element.current) {
      setIsFullScreen(true);
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        /* Safari */
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        /* IE11 */
        element.current.msRequestFullscreen();
      }
    }
  };

  // 하나로 통일
  const exitFullScreen = () => {
    if (!isFullScreen) return;
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return { element, openFullScreen, exitFullScreen };
};

export default useFullScreen;
