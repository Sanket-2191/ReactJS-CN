import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const { expenses } = props;

  const income = expenses.reduce((total, item) =>
    item.amount > 0 ? total + item.amount : total
    , 0);

  const expense = expenses.reduce((total, item) =>
    item.amount < 0 ? total + item.amount : total
    , 0);

  const grandTotal = income + expense;

  console.log(income, expense, grandTotal);


  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>{grandTotal >= 0 ? "" : "-"}${/* Grand total should be displayed here */Math.abs(grandTotal)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${/*Total Profit Amount should be displayed here */income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${/* Total expense amount should be displayed here */Math.abs(expense)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
