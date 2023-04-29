import { ExpensesBreakdownCard } from "./components/ExpensesBreakdownCard";
import { TitleCard } from "./components/TitleCard";
import { PageContainer } from "./components/PageContainer";
import "./style.css";

export function App() {
  return (
    <PageContainer>
      <TitleCard />
      <ExpensesBreakdownCard />
    </PageContainer>
  );
}
