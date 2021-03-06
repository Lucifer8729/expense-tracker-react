import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const incomeAmount = amounts
    .reduce((acc, amount) => (amount > 0 ? acc + amount : acc + 0), 0)
    .toFixed(2);
  const expenseAmount = amounts
    .reduce((acc, amount) => (amount < 0 ? acc + amount : acc + 0), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomeAmount}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenseAmount}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
