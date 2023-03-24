import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {
  return (
    <div className="relative flex flex-col items-center rounded-lg bg-dark-blue-gray min-w-[280px] max-w-[540px] m-4 p-8 py-12">
      {props.children}
    </div>
  );
}
