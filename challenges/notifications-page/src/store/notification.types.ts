export interface NotificationDataType {
  id: number;
  userName: string;
  userDpUrl: string;
  content: string;
  contentImgUrl: string;
  timeStamp: string;
  extraData: ExtraDataType;
  unread: boolean;
}

export interface ExtraDataType {
  type: "" | "group" | "post" | "message";
  content: string;
}
