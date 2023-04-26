import { ChangeEvent, useState } from "react";

export function useNumericInput(maxLen: number) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isNaN(Number(value)) || !value) {
      setValue("");
      return;
    }

    if (value.length <= maxLen) {
      setValue(Number(value).toString());
    }
  };

  return { value, onChange, error, setError };
}
