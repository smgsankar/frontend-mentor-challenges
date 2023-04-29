import { Card } from "./Card";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesSummary } from "./ExpensesSummary";

export function ExpensesBreakdownCard() {
  return (
    <Card background="white">
      <main className="flex flex-col">
        <ExpensesChart />
        <hr className="my-8" />
        <ExpensesSummary />
      </main>
    </Card>
  );
}
