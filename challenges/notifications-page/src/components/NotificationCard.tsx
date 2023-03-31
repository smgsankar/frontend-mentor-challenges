import { NotificationDataType } from "../store/notification.types";
import { ImageContainer } from "./ImageContainer";
import { MessageCard } from "./MessageCard";
import { NotificationExtraData } from "./NotificationExtraData";

interface NotificationCardPropsType {
  notification: NotificationDataType;
  allRead: boolean;
}

export function NotificationCard(props: NotificationCardPropsType) {
  const { notification, allRead } = props;
  const unread = !allRead && notification.unread;

  return (
    <article className={`flex flex-row px-4 py-2 rounded-xl gap-4 ${unread && "bg-light-grayish-blue-1"}`}>
      <ImageContainer
        src={notification.userDpUrl}
        alt={notification.userName}
        className="my-2"
      />
      <div className="w-[100%] justify-center">
        <div className="flex flex-row justify-between my-2">
          <div>
            <p>
              <span className="font-bold text-very-dark-blue hover:text-blue cursor-pointer px-1">
                {notification.userName}
              </span>
              <span className="text-clip text-dark-grayish-blue px-1">
                {notification.content}
              </span>
              <NotificationExtraData extraData={notification.extraData} />
              {unread && (
                <figure className="inline-block bg-red h-2 w-2 mx-[2px] mt-1 rounded-[50%]" />
              )}
            </p>
            <p className="text-grayish-blue">{notification.timeStamp}</p>
          </div>
          {notification.contentImgUrl != "" && (
            <ImageContainer
              src={notification.contentImgUrl}
              alt={notification.content}
              className="hover:cursor-pointer hover:rounded-lg hover:border-light-grayish-blue-1 border-4 border-transparent"
            />
          )}
        </div>
        {notification.extraData.type == "message" && (
          <MessageCard message={notification.extraData.content} />
        )}
      </div>
    </article>
  );
}
