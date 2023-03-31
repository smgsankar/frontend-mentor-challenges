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
        <h1 className="text-xl font-bold">Notifications</h1>
        {!allRead && (
          <span className="bg-blue inline-block px-2 rounded text-light-grayish-blue-1">
            {notificationCount}
          </span>
        )}
      </div>
      {!allRead && (
        <button
          type="button"
          onClick={onMarkAsReadClick}
          className="text-dark-grayish-blue hover:text-blue"
        >
          Mark all as read
        </button>
      )}
    </header>
  );
}
