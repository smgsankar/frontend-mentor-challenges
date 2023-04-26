import { useNumericInput } from "./useNumericInput";

export function useDateInput() {
  const dayInput = useNumericInput(2);
  const monthInput = useNumericInput(2);
  const yearInput = useNumericInput(4);

  return { dayInput, monthInput, yearInput };
}
