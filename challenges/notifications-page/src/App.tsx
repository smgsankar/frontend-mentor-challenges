import { useState } from "react";
import { NotificationCard } from "./components/NotificationCard";
import { NotificationsHeader } from "./components/NotificationsHeader";
import { DATA } from "./store/mockData";
import "./style.css";

export function App() {
  const [allRead, setAllRead] = useState(false);
  return (
    <div className="font-plusJakartaSans overflow-y-auto h-screen w-screen">
      <div className="flex flex-row">
        <div className="bg-red h-10 w-10">.</div>
        <div className="bg-blue h-10 w-10">.</div>
        <div className="bg-very-light-grayish-blue h-10 w-10">.</div>
        <div className="bg-light-grayish-blue-1 h-10 w-10">.</div>
        <div className="bg-light-grayish-blue-2 h-10 w-10">.</div>
        <div className="bg-grayish-blue h-10 w-10">.</div>
        <div className="bg-dark-grayish-blue h-10 w-10">.</div>
        <div className="bg-very-dark-blue h-10 w-10">.</div>
      </div>
      <NotificationsHeader
        allRead={allRead}
        newNofificationsCount={DATA.filter((datum) => datum.unread).length}
        handleMarkAllAsRead={setAllRead}
      />
      <main className="flex flex-col gap-6 m-4">
        {DATA.map((datum) => {
          console.log(datum);
          return (
            <NotificationCard key={datum.id} notification={datum} allRead={allRead} />
          );
        })}
      </main>
    </div>
  );
}
