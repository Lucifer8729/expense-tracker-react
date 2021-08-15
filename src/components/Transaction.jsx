import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const color = transaction.amount < 0 ? "minus" : "plus";

  return (
    <>
      <li className={color}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </>
  );
};

export default Transaction;
