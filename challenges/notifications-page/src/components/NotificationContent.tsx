import { NotificationDataType } from "../store/notification.types";
import { NotificationCard } from "./NotificationCard";

interface NotificationContentPropsType {
  data: NotificationDataType[];
  allRead: boolean;
}

export function NotificationContent({ allRead, data }: NotificationContentPropsType) {
  return (
    <main className="flex flex-col gap-6 mt-6">
      {data.map((datum) => {
        console.log(datum);
        return (
          <NotificationCard
            key={datum.id}
            notification={datum}
            allRead={allRead}
          />
        );
      })}
    </main>
  );
}
