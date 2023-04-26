import { ValueDisplay } from "./ValueDisplay";

export function AgeDisplay() {
  return (
    <section className="text-8xl font-extrabold italic leading-[100px]">
      <ValueDisplay value="--" suffix="years" />
      <ValueDisplay value="--" suffix="months" />
      <ValueDisplay value="--" suffix="days" />
    </section>
  );
}
