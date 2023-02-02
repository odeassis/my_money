import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Search } from "./components/Search";
import {
  TransactionContainerTable,
  TransactionTable,
  ValueHighlight,
} from "./styles";

interface Transaction {
  id: number;
  price: number;
  category: string;
  description: string;
  createdAt: string;
  type: "income" | "outcome";
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    fetch("http://localhost:2030/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <Header />
      <Summary />

      <TransactionContainerTable>
        <Search />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <ValueHighlight variant={transaction.type}>
                      R$ {transaction.price}
                    </ValueHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainerTable>
    </>
  );
}
