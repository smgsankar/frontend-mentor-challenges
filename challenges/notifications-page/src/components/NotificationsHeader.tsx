interface NotificationsHeaderPropsType {
  allRead: boolean;
  newNofificationsCount: number;
  handleMarkAllAsRead: (val: boolean) => void;
}

export function NotificationsHeader(props: NotificationsHeaderPropsType) {
  const { allRead, newNofificationsCount, handleMarkAllAsRead } = props;

  function onMarkAsReadClick() {
    handleMarkAllAsRead(true);
  }

  const notificationCount = allRead ? 0 : newNofificationsCount;

  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row gap-1">
        <h1 className="font-bold">Notifications</h1>
        <span>{notificationCount}</span>
      </div>
      {!allRead && (
        <button type="button" onClick={onMarkAsReadClick}>
          Mark all as read
        </button>
      )}
    </header>
  );
}
