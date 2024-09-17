import { useState, useReducer, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    //add logic for updating the expense here
    case "EDIT_EXPENSE": {
      console.log("edit payload: ", payload);

      return {
        expenses: state.expenses.map((expense) =>
          expense.id === payload.id
            ? { ...expense, text: payload.text, amount: payload.amount }
            : expense
        ),
      };
    }

    default:
      return state;
  }
};
// Use proper state management for populating the form in the expenseForm component on clicking the edit icon in the Transaction component
function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  // to pass the expense to edit to form.
  const [toUpdate, setToUpdate] = useState(null);

  // for when edit button on particular expense is clicked
  const [editing, setEditing] = useState({ id: "", status: false });

  useEffect(() => {
    console.log(editing);

    if (editing.status) {
      const expense = state.expenses.find((expense) => expense.id === editing.id);
      console.log(expense);
      console.log("state: ", state);

      setToUpdate(expense);
    }
  }, [editing])

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };
  // Add dispatch function for updation
  const editExpense = (id, text, amount) => {
    dispatch({ type: "EDIT_EXPENSE", payload: { id, text, amount } });
  };
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          // Pass the props for populating the form with expense text and amount
          editExpense={editExpense}
          toUpdate={toUpdate}
          setToUpdate={setToUpdate}
          setEditing={setEditing}
          editing={editing}
        />
        <div className="expenseContainer">
          {console.log("before expense info compo state: ", state.expenses)
          }
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            setEditing={setEditing}
            expenses={state.expenses}
            deleteExpense={deleteExpense}
          // Pass props to update a transacation
          />
        </div>
      </div>
    </>
  );
}

export default App;
