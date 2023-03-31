import { ExtraDataType } from "../store/notification.types"

interface NotificationExtraDataPropsType {
  extraData: ExtraDataType
}

export function NotificationExtraData (props: NotificationExtraDataPropsType) {
  const { extraData: {type, content} } = props;
  return (
    <>
    {type == "group" && (
      <span className="font-bold text-blue hover:cursor-pointer px-1">{content}</span>
    )}
    {type == "post" && (
      <span className="font-bold text-very-dark-blue hover:text-blue cursor-pointer px-1">{content}</span>
    )}
    </>
  )
}