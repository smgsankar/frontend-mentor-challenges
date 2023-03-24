import { useEffect } from "react";
import { AdviceCard } from "./components/AdviceCard";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { RefreshDice } from "./components/RefreshDice";
import { Spinner } from "./components/Spinner";
import { useAdvice } from "./hooks/useAdvice";
import "./style.css";

export function App() {
  const {
    advice,
    actions: { loadAdvice, refreshAdvice },
  } = useAdvice();

  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <Container>
      <Card>
        {advice.id === 0 && <Spinner />}
        {advice.id !== 0 && <AdviceCard adviceSlip={advice} />}
        <RefreshDice onRefresh={refreshAdvice} />
      </Card>
    </Container>
  );
}
