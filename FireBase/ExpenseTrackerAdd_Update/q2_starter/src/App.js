import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { doc, collection, addDoc, setDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  console.log("payload :", payload);
  switch (action.type) {
    // add cases to set retrived expenses to state here
    case "ADD_EXPENSE": {
      console.log("State during add ops:", state);

      return {
        expenses: [payload.expense, ...state.expenses]  // Spread to copy the expense object
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // create function to get expenses from firestore here

  // need to reload the page to get all the data....................................................

  // const getExpenses = async () => {
  //   const querySnapshot = await getDocs(collection(db, "expenses"));
  //   const expenses = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data()
  //   }));
  //   // console.log("retrieved data: ", data);

  //   return expenses;
  // }

  // real time DB.... using onSnapShot();


  // use appropriate hook to get the expenses when app mounts
  useEffect(() => {
    let isMounted = true; // flag to ensure component is mounted
    console.log("checking ourside fetchExpenses....");
    // const fetchExpenses = async () => {
    //   try {
    //     const expenses = await getExpenses();
    //     console.log("checking....");

    //     if (isMounted) {
    //       expenses.forEach((exp) => {
    //         dispatch({
    //           type: "ADD_EXPENSE",
    //           payload: { expense: exp },
    //         });
    //       });
    //       toast.success("Expenses retrieved successfully.");
    //       // isMounted = false;
    //     }
    //   } catch (error) {
    //     console.error("Error fetching expenses: ", error);
    //   }
    // };

    // fetchExpenses();

    onSnapshot(collection(db, "expenses"), (snapShot) => {
      // if (isMounted) {
      const expenses = snapShot.docs.map((doc) => ({
        ...doc.data()
      }))

      console.log("Expenses after snapShot: ", expenses);
      console.log("this.state : ", state);

      expenses.forEach((exp) => {
        console.log("this.state. in forEach loop: ", state.expenses);
        if (state.expenses.length < expenses.length) {
          dispatch({
            type: "ADD_EXPENSE",
            payload: { expense: exp }
          });
        }
      });
    }
      // }

    );

    return () => isMounted = false; // cleanup function to avoid setting state after unmount

    // useEffect(() => {
    //   const fetchExpenses = async () => {
    //     try {
    //       const expenses = await getExpenses();  // Await the result of getExpenses
    //       console.log("expenses in useEffect: ", expenses);

    //       // After retrieving the expenses, you can dispatch the action to update the state
    //       expenses.forEach((exp) => {
    //         console.log("Expense in forEach loop: ", exp);
    //         dispatch({
    //           type: "ADD_EXPENSE",
    //           payload: { expense: exp }
    //         });
    //       });

    //       toast.success("Expenses retrieved successfully.");
    //     } catch (error) {
    //       console.error("Error fetching expenses: ", error);
    //     }
    //   };

    //   fetchExpenses();
  }, []);

  // useEffect(() => {
  //   console.log("current state:", state);

  // }, [])

  const addExpense = async (expense) => {
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } }
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    const expenseRef = doc(db, "expenses", expense.id);
    await setDoc(expenseRef, expense);

    dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
    toast.success("Expense updated successfully.");
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
