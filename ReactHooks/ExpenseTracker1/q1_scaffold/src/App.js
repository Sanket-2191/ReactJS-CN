import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const App = () => {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);

  const handleExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm handleExpense={handleExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
