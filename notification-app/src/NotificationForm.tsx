import { useEffect, useState } from "react";
import useSWR from "swr";
import './App.css';
import { fetchCategories } from "./requests";

interface NotificationFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, data: any) => void;
}

export const NotificationForm = ({ onSubmit }: NotificationFormProps) => {

  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { data: categories } = useSWR('/api/categories', fetchCategories);

  useEffect(() => {
    if (categories && !category) {
      setCategory(categories[0]);
    }
  }, [categories, category]);

  return (
    <form onSubmit={(e) => onSubmit(e, { category, message })}>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories &&
            categories.map((cat: string) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <br />
      <label>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send Notification</button>
    </form>
  );
}