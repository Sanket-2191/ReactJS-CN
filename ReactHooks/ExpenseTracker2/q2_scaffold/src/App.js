import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense
  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }

  // Create function to delete an expense
  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} removeExpense={removeExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
