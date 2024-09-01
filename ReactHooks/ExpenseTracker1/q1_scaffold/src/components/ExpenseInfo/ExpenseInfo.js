import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const { expenses } = props;
  console.log(expenses);

  const income = expenses.reduce((acc, ini) => acc + (() => (parseInt(ini.amount) >= 0 ? parseInt(ini.amount) : 0))(), 0);
  const expense = Math.abs(expenses.reduce((acc, ini) => acc + (() => (parseInt(ini.amount) < 0 ? parseInt(ini.amount) : 0))(), 0));
  const profit = income - expense;

  console.log(income, expense, profit);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${/* Grand total should be displayed here */
          profit

        }</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );

}

export default ExpenseInfo;