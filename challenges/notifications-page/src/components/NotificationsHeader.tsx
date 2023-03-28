interface NotificationsHeaderPropsType {
  newNofificationsCount: number;
  handleMarkAllAsRead: () => void;
}

export function NotificationsHeader(props: NotificationsHeaderPropsType) {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row gap-1">
        <h1 className="font-bold">Notifications</h1>
        <span>{props.newNofificationsCount}</span>
      </div>
      <button type="button" onClick={props.handleMarkAllAsRead}>Mark all as read</button>
    </header>
  );
}
