import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="font-poppins h-screen w-screen overflow-auto bg-off-white flex justify-center items-center">
      {children}
    </div>
  );
}
