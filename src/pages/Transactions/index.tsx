import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Search } from "./components/Search";
import {
  TransactionContainerTable,
  TransactionTable,
  ValueHighlight,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionContainerTable>
        <Search />
        <TransactionTable>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <ValueHighlight variant="income">R$ 12.000,00</ValueHighlight>
            </td>
            <td>Venda</td>
            <td>03/02/2023</td>
          </tr>
          <tr>
            <td>Ifood</td>
            <td>
              <ValueHighlight variant="outcome">-R$ 700,00</ValueHighlight>
            </td>
            <td>Compras</td>
            <td>06/01/2023</td>
          </tr>
        </TransactionTable>
      </TransactionContainerTable>
    </>
  );
}
