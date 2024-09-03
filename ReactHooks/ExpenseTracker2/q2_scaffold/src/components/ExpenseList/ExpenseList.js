import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
  const { expenses, removeExpense } = props
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */

          expenses.map((e, id) => {
            return <Transaction expense={e} removeExpense={removeExpense} index={e.id} />
          })
        }
      </ul>
    </div>
  );
};

export default ExpenseList;
