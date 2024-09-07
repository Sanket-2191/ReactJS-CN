import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const expenseReducer = (state, action) => {

  switch (action.type) {
    case "ADD":
      return [action.expense, ...state];
    case "REMOVE":
      console.log(action);

      return state.filter(e => e.id !== action.id)
    case "UPDATE":
      console.log(action);

      const e = state.find(e => e.id === action.id)
      e = { ...e, text: action.text, amount: action.amount };

      return state;
    default:
      return {};
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  const [expenses, dispatch] = useReducer(expenseReducer, [])

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={dispatch} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={dispatch} />
        </div>
      </div>
    </>
  );
}

export default App;
