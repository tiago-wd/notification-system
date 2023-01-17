import { Notification } from "../types/notification";

export const fetchCategories = async () => {
  const response = await fetch(
    "http://localhost:4000/notifications/categories"
  );
  const data = await response.json();
  return data.categories;
};

export const sendNotification = async (notification: Notification) => {
  const { category, message } = notification;
  await fetch("http://localhost:4000/notifications", {
    method: "POST",
    body: JSON.stringify({ category, message }),
    headers: { "Content-Type": "application/json" },
  });
};

export const getNotifications = async () => {
  const response = await fetch("http://localhost:4000/notifications");
  const data = await response.json();
  return data.notifications;
};
