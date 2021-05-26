import React, {useState} from 'react';

interface NotificationContextData {
  notificationText: null | string;
  setNotificationText: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NotificaitonContext = React.createContext<NotificationContextData>(
  {
    notificationText: null,
    setNotificationText: () => null,
  },
);

const NotificationProvider: React.FC = ({children}) => {
  const [notificationText, setNotificationText] = useState<string | null>(null);

  const contextValue = {
    notificationText,
    setNotificationText,
  };
  return (
    <NotificaitonContext.Provider value={contextValue}>
      {children}
    </NotificaitonContext.Provider>
  );
};

export default NotificationProvider;
