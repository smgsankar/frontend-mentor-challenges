export interface NotificationDataType {
  id: number;
  userName: string;
  userDpUrl: string;
  content: string;
  contentImgUrl: string;
  timeStamp: string;
  extraData: ExtraData;
  unread: boolean;
}

export interface ExtraData {
  type: string;
  content: string;
}
