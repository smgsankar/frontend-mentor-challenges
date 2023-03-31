import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="font-plusJakartaSans h-screen w-screen overflow-auto bg-light-grayish-blue-2 flex justify-center">
      {children}
    </div>
  );
}
