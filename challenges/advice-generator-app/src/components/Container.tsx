import { PropsWithChildren } from "react";

export function Container(props: PropsWithChildren) {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-dark-blue">
      {props.children}
    </main>
  )
}