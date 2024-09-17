import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

// toUpdate = { toUpdate }
const ExpenseForm = ({ addExpense, editExpense, toUpdate, setToUpdate, setEditing, editing }) => {
  let expenseTextInput = useRef();
  let expenseAmountInput = useRef();

  // const [isEditing, setIsEditing] = useState(editing.status)

  // Use the useEffect hook here, to check if an expense is to be updated
  // If yes, then autofill the form values with the text and amount of the expense
  useEffect(() => {
    if (toUpdate) {
      expenseTextInput.current.value = toUpdate.text;
      expenseAmountInput.current.value = toUpdate.amount;
    }
  }, [toUpdate]);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    if (!toUpdate) {

      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: new Date().getTime()
      };
      addExpense(expense);
    } else {
      // Logic to update expense here
      let id = toUpdate.id;
      let text = expenseTextInput.current.value;
      let amount = expenseAmountInput.current.value
      console.log("updated expense: ", { id, text, amount });

      editExpense(id, text, amount);

      setToUpdate(null);
      setEditing(false);
    }
    clearInput();
    return;


  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3>{toUpdate ? "Edit transaction" : "Add new transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {/* Change text to Edit Transaction if an expense is to be updated */}
        {toUpdate ? "Edit transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
