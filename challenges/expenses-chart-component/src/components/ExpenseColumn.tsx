import { useMemo, useState } from "react";
import { COLORS, DATA } from "../mockData";

interface ExpensesColumnPropsType {
  day: string;
  amount: number;
  maxAmount: number;
}

export function ExpensesColumn(props: ExpensesColumnPropsType) {
  const { day, amount, maxAmount } = props;
  const [isHovered, setIsHovered] = useState(false);


  const background = useMemo(() => {
    let today = new Date().getDay();
    if(today == 0) today = 6;
    else today--;

    const initialBackground = day === DATA[today]?.day ? "cyan" : "softRed";
    return isHovered ? initialBackground + "Hovered" : initialBackground;
  }, [isHovered]);
  

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const barHeight = useMemo(() => Math.round((amount / maxAmount) * 200), []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-[30px] md:w-[50px] rounded cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: barHeight, background: COLORS[background] }}
      >
        {isHovered && (
          <div className="absolute top-[-40px] left-[-6px] bg-dark-brown h-[36px] w-[64px] rounded p-2">
            <p className="text-white font-bold">${amount}</p>
          </div>
        )}
      </div>
      {day}
    </div>
  );
}
