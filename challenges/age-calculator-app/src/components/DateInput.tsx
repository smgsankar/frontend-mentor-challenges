import { ValueInput } from "./ValueInput";

export function DateInput() {
  return (
    <section className="flex flex-row gap-6">
      <ValueInput label="DAY" placeholder="DD" />
      <ValueInput label="MONTH" placeholder="MM" />
      <ValueInput label="YEAR" placeholder="YYYY" />
    </section>
  );
}
