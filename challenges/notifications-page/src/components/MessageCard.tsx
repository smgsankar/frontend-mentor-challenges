interface MessageCardPropsType{
  message: string;
}

export function MessageCard(props: MessageCardPropsType) {
  return (
    <p className="p-4 border-grayish-blue border-solid border-[0.25px] rounded hover:bg-light-grayish-blue-1 hover:border-transparent">
      {props.message}
    </p>
  )
}