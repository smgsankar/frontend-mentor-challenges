import { DICE_SVG } from "../svgPaths";

interface RefreshDicePropsType {
  onRefresh: () => void;
}

export function RefreshDice(props: RefreshDicePropsType) {
  const { onRefresh } = props;
  return (
    <button
      type="button"
      onClick={onRefresh}
      className="absolute bottom-[-28px] rounded-full p-4 bg-neon-green cursor-pointer highlight-off active:shadow-glow hover:shadow-glow"
    >
      <img src={DICE_SVG} alt="shuffle" className="select-none" />
    </button>
  );
}
