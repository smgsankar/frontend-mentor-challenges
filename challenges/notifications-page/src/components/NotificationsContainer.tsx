import { PropsWithChildren } from "react";

export function NotificationsContainer({ children }: PropsWithChildren) {
  return (
    <div className="desktop:m-10 desktop:p-8 p-5 max-w-[660px] h-fit bg-very-light-grayish-blue desktop:rounded-3xl">
      {children}
    </div>
  );
}
