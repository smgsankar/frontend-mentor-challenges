import { useState } from "react";
import { NotificationsHeader } from "./components/NotificationsHeader";
import { DATA } from "./store/mockData";
import { NotificationsContainer } from "./components/NotificationsContainer";
import { NotificationContent } from "./components/NotificationContent";
import { PageContainer } from "./components/PageContainer";
import "./style.css";

export function App() {
  const [allRead, setAllRead] = useState(false);
  const unreadCount = DATA.filter((datum) => datum.unread).length;

  return (
    <PageContainer>
      <NotificationsContainer>
        <NotificationsHeader
          allRead={allRead}
          newNofificationsCount={unreadCount}
          handleMarkAllAsRead={setAllRead}
        />
        <NotificationContent data={DATA} allRead={allRead} />
      </NotificationsContainer>
    </PageContainer>
  );
}
