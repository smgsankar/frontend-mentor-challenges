import { SlipType } from "../hooks/useAdvice";
import { Divider } from "./Divider";

interface AdviceCardPropsType {
  adviceSlip: SlipType;
}

export function AdviceCard(props: AdviceCardPropsType) {
  const { adviceSlip: advice } = props;
  return(
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="font-manrope text-neon-green text-xs tracking-[0.25em]">
        ADVICE #{advice.id}
      </div>
      <div className="font-manrope text-[28px] text-light-cyan text-center font-[800]">
        <q>{advice.advice}</q>
      </div>
      <Divider />
    </div>
  )
}