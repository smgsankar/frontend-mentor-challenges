import { useEffect, useState } from "react";
import { AgeCalculatorCard } from "./components/AgeCalculatorCard";
import { AgeDisplay } from "./components/AgeDisplay";
import { DateInput } from "./components/DateInput";
import { DividerWithAction } from "./components/DividerWithAction";
import { PageContainer } from "./components/PageContainer";
import { AgeType, DateValidatorPropsType } from "./utils/ageCalculator.types";
import { validateDay, validateMonth, validateYear } from "./utils/dateHelpers";
import { DEFAULT_AGE } from "./utils/constants";
import { useDateInput } from "./utils/useDateInput";
import "./style.css";

export function App() {
  const [age, setAge] = useState<AgeType>(DEFAULT_AGE);
  const dateInput = useDateInput();

  const calculateAge = () => {
    const { dayInput, monthInput, yearInput } = dateInput;
    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);
    
    const today = new Date();

    const dateValidatorProps: DateValidatorPropsType = {
      day, month, year, today
    }

    const dayValidationError = validateDay(dateValidatorProps);
    const monthValidationError = validateMonth(dateValidatorProps);
    const yearValidationError = validateYear(dateValidatorProps);

    dayInput.setError(dayValidationError);
    monthInput.setError(monthValidationError);
    yearInput.setError(yearValidationError);

    if(dayValidationError || monthValidationError || yearValidationError) {
      setAge(DEFAULT_AGE);
      return;
    }

    let ageDay = (today.getDate() - day);
    let ageMonth = (today.getMonth() + 1 - month);
    let ageYear = (today.getFullYear() - year);

    if(ageDay < 0) {
      ageMonth -= 1;
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(ageMonth < 0) {
      ageYear -= 1;
      ageMonth += 12;
    }

    setAge({ days: ageDay.toString(), months: ageMonth.toString(), years: ageYear.toString() });
  }

  useEffect(() => {
    const calculateAgeOnEnter = (event: KeyboardEvent) => {
      if(event.key === "Enter") {
        calculateAge();
      }
    }

    window.addEventListener("keydown", calculateAgeOnEnter);

    return () => {
      window.removeEventListener("keydown", calculateAgeOnEnter);
    }
  }, [calculateAge]);

  return (
    <PageContainer>
      <AgeCalculatorCard>
        <DateInput dateInput={dateInput} />
        <DividerWithAction calculateAge={calculateAge} />
        <AgeDisplay age={age} />
      </AgeCalculatorCard>
    </PageContainer>
  );
}
