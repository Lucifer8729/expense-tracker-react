import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleText = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  const handleAmount = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
