import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleDown size={24} color="#00B37E" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleUp size={24} color="#F75A68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} color="#FFFFFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
