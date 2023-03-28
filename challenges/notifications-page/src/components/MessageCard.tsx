interface MessageCardPropsType{
  message: string;
}

export function MessageCard(props: MessageCardPropsType) {
  return (
    <div>
      {props.message}
    </div>
  )
}