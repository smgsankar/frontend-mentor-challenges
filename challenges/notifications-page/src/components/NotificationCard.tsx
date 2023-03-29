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
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-shrink-0 my-2">
        <ImageContainer
          src={notification.userDpUrl}
          alt={notification.userName}
        />
      </div>
      <div className="w-[100%] justify-center">
        <div className="flex flex-row justify-between my-2">
          <div>
            <div>
              <span className="font-bold text-very-dark-blue hover:text-blue cursor-pointer">{notification.userName}</span>
              <span className="text-clip">{notification.content}</span>
              <NotificationExtraData extraData={notification.extraData} />
              {!allRead && notification.unread && <span className="inline-block bg-red h-2 w-2 mx-[2px] mt-1 rounded-[50%]" />}
            </div>
            {notification.timeStamp}
          </div>
          {notification.contentImgUrl != "" && (
            <ImageContainer
              src={notification.contentImgUrl}
              alt={notification.content}
              className="hover:cursor-pointer"
            />
          )}
        </div>
        {notification.extraData.type == "message" && (
          <MessageCard message={notification.extraData.content} />
        )}
      </div>
    </div>
  );
}
