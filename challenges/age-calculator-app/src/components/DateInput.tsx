import { useDateInput } from "../utils/useDateInput";
import { ValueInput } from "./ValueInput";

interface DateInputPropsType {
  dateInput: ReturnType<typeof useDateInput>;
}

export function DateInput({ dateInput }: DateInputPropsType) {
  const { dayInput, monthInput, yearInput } = dateInput;
  return (
    <section className="flex flex-row gap-3 md:gap-6">
      <ValueInput label="DAY" placeholder="DD" input={dayInput} />
      <ValueInput label="MONTH" placeholder="MM" input={monthInput} />
      <ValueInput label="YEAR" placeholder="YYYY" input={yearInput} />
    </section>
  );
}
