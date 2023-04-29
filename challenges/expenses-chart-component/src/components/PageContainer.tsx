import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen overflow-auto bg-cream flex flex-col justify-center items-center font-dmsans">
      {children}
    </div>
  );
}
