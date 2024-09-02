import React from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */
          expenses.map((e, i) => {
            return (
              <div key={i}>
                <h2>{e.text}</h2>
                <h1>{e.amount}</h1>
              </div>
            )
          })
        }
      </ul>
    </div>
  );

}
export default ExpenseList;