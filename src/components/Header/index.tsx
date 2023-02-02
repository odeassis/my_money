import * as Dialog from "@radix-ui/react-dialog";
import { CurrencyCircleDollar } from "phosphor-react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from "./styles";
import { NewTransactionModel } from "../NewTransactionModel";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <CurrencyCircleDollar size={40} color={"#ffffff"} weight="fill" />
          <strong>My Money</strong>
        </HeaderLogo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModel />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
