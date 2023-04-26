import { AgeCalculatorCard } from "./components/AgeCalculatorCard";
import { AgeDisplay } from "./components/AgeDisplay";
import { DateInput } from "./components/DateInput";
import { DividerWithAction } from "./components/DividerWithAction";
import { PageContainer } from "./components/PageContainer";
import "./style.css";

export function App() {
  return (
    <PageContainer>
      <AgeCalculatorCard>
        <DateInput />
        <DividerWithAction />
        <AgeDisplay />
      </AgeCalculatorCard>
    </PageContainer>
  );
}
