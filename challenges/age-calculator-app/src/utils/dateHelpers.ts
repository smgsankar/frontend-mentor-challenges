import { DateValidatorPropsType } from "./ageCalculator.types";
import {
  INVALID_DAY_ERROR,
  INVALID_MONTH_ERROR,
  PAST_DATE_ERROR,
  REQUIRED_ERROR,
} from "./constants";

export function validateDay(props: DateValidatorPropsType): string {
  const { day, month, year, today } = props;

  if (!day) {
    return REQUIRED_ERROR;
  }

  if (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    day > today.getDate()
  ) {
    return PAST_DATE_ERROR;
  }

  const maxDate = new Date(year, month, 0).getDate();
  if (day > maxDate) {
    return INVALID_DAY_ERROR;
  }

  return "";
}

export function validateMonth(props: DateValidatorPropsType): string {
  const { day, month, year, today } = props;

  if (!month) {
    return REQUIRED_ERROR;
  }

  if (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    day > today.getDate()
  ) {
    return PAST_DATE_ERROR;
  }

  if (month > 12) {
    return INVALID_MONTH_ERROR;
  }

  return "";
}

export function validateYear(props: DateValidatorPropsType): string {
  const { year, today } = props;

  if (!year) {
    return REQUIRED_ERROR;
  }

  if (year > today.getFullYear()) {
    return PAST_DATE_ERROR;
  }

  return "";
}
