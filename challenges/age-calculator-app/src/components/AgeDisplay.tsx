import { AgeType } from "../utils/ageCalculator.types";
import { ValueDisplay } from "./ValueDisplay";

interface AgeDisplayPropsType {
  age: AgeType;
}

export function AgeDisplay({age}: AgeDisplayPropsType) {
  return (
    <section className="text-8xl font-extrabold italic leading-[100px]">
      <ValueDisplay value={age.years} suffix="years" />
      <ValueDisplay value={age.months} suffix="months" />
      <ValueDisplay value={age.days} suffix="days" />
    </section>
  );
}
