import { useMemo } from "react";
import { DATA } from "../mockData";
import { ExpensesColumn } from "./ExpenseColumn";

export function ExpensesChart() {
  const maxAmount = useMemo(() => {
    return Math.max(...DATA.map((expense) => expense.amount));
  }, []);

  return (
    <section className="w-[100%]">
      <h1 className="text-2xl text-dark-brown font-bold">
        Spending - Last 7 days
      </h1>
      <div className="flex items-end mt-16 text-sm text-medium-brown justify-between">
        {DATA.map((expense) => (
          <ExpensesColumn {...expense} maxAmount={maxAmount} key={expense.day} />
        ))}
      </div>
    </section>
  );
}
