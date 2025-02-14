type windowNotification = {
  sendNotification: () => void;
};

const useWindowNotification = (title: string, options?: NotificationOptions): windowNotification => {
  if (!('Notification' in window)) {
    // 타입으로 인해 빈함수 처리
    return { sendNotification: () => {} };
  }

  // 알림 처리 함수
  // granted: 사용자가 윈도우 시스템에서 알림을 표시 할 수 있도록 권한 O
  // denied: 사용자가 윈도우 시스템에서 알림을 표시 할 수 있도록 권한 X
  // default: 알 수 없음 동작은 허가가 거부된 것 처럼 동작!
  const sendNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          console.log('알림 권한이 허용되지 않았거나 표시할 수 없습니다.');
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return { sendNotification };
};

export default useWindowNotification;
