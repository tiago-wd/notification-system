import './App.css'

interface NotificationListProps {
  notifications: string[];
}

export const NotificationList = ({ notifications }: NotificationListProps) => {
  return (
    <>
      <h2>Notification History</h2>
      <ul>
        {notifications.filter(notification => notification).map((notification) => (
          <li>
            {notification}
          </li>
        ))}
      </ul>
    </>
  );
}