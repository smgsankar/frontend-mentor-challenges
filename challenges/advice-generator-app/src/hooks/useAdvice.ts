import { useState } from "react";

const ADVICE_FETCH_URL = "https://api.adviceslip.com/advice";

export interface ResponseType {
  slip: SlipType;
}

export interface SlipType {
  id: number;
  advice: string;
}

export const INITIAL_ADVICE_SLIP = {
  id: 0,
  advice: '',
}

export async function fetchAdvice() {
  const response = await fetch(ADVICE_FETCH_URL);
  const adviceSlip = await response.json() as ResponseType;
  return adviceSlip.slip;
}

export function useAdvice(){
  const [adviceSlip, setAdviceSlip] = useState<SlipType>(INITIAL_ADVICE_SLIP);

  const resetAdvice = () => {
    setAdviceSlip(INITIAL_ADVICE_SLIP);
  }

  const loadAdvice = async () => {
    const advice = await fetchAdvice();
    setAdviceSlip(advice);
  };

  const refreshAdvice = () => {
    resetAdvice();
    loadAdvice();
  }

  return {
    advice: adviceSlip,
    actions: {
      loadAdvice,
      refreshAdvice,
    }
  }
  
}