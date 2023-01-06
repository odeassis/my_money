import { CurrencyCircleDollar } from "phosphor-react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <CurrencyCircleDollar size={40} color={"#ffffff"} weight="fill" />
          <strong>My Money</strong>
        </HeaderLogo>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
