import { PropsWithChildren } from "react";

export function AgeCalculatorCard({ children }: PropsWithChildren) {
  return (
    <main className="bg-white p-8 md:p-16 m-8 rounded-[36px] rounded-br-[64px] md:rounded-br-[128px]">
      {children}
    </main>
  );
}
