import { PropsWithChildren } from "react";

interface CardPropsType {
  background: string;
}

export function Card({ background, children }: PropsWithChildren<CardPropsType>) {
  return (
    <div className={`bg-${background} w-[360px] md:w-[540px] my-4 mx-2 p-6 md:p-8 rounded-2xl`}>
      {children}
    </div>
  )
}