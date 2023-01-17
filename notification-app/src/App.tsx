import React from 'react';
import useSWR from 'swr';
import { NotificationForm } from './NotificationForm';
import { NotificationList } from './NotificationList';
import { getNotifications, sendNotification } from './requests';
import { Notification } from './types/notification';

const App = () => {

  const { data, error, mutate } = useSWR('/api/notifications', getNotifications);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, { category, message }: Notification) => {
    e.preventDefault();
    try {
      await sendNotification({ category, message });

      // we don't have user in the frontend, so we need to refetch the data
      const newData = await getNotifications();
      mutate(newData);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <NotificationForm onSubmit={handleSubmit} />
      <br />
      {error && <div>Failed to load notifications</div>}
      {data && <NotificationList notifications={data} />}
    </div>
  );
}

export default App;
