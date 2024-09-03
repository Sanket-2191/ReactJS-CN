import React, { useState, useRef } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

const Transaction = ({ expense, index, removeExpense }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [editing, setEditing] = useState(false);
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();


  return (
    <li
      key={expense.id}
      className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss
        }`}
      onMouseOver={() => {
        setCurrentHoverIndex(index);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(null);
      }}
    >
      <div><input type="text"
        value={expense.text}
        disabled={editing ? false : true}
        ref={expenseTextInput}
        style={{ borderStyle: "none", maxWidth: "fitContent" }}
      />
      </div>

      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${currentHoverIndex === index && styles.movePrice
            }`}
        >
          <input type="text"
            value={expense.amount > 0 ? `$ ${Math.abs(expense.amount)}` : `-$ ${Math.abs(expense.amount)}`}
            disabled={editing ? false : true}
            ref={expenseAmountInput}

            style={{ borderStyle: "none", maxWidth: "fitContent" }} />
        </div>
        <div
          className={`${styles.btnContainer} ${currentHoverIndex === index && styles.active
            }`}
        >
          <div className={styles.edit} onClick={() => { }}>
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div className={styles.delete} onClick={() => { removeExpense(index) }}>
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;
