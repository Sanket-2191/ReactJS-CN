import { useDispatch, useSelector } from "react-redux";

import { TimerActions } from "../components/TimerActions.jsx";
import { Time } from "../components/Time.jsx";
import { alertSelector, resetMessage } from "../redux/reducers/alertReducer.js";
import { useEffect, useId } from "react";
// import { Alert } from "../components/Alert.jsx";



export const Timer = () => {

  const { message } = useSelector(alertSelector);  // Subscribe to the message from the Redux store
  const dispatch = useDispatch();


  const Alert = () => {
    const id = useId();  // Generate a stable ID for the alert div

    useEffect(() => {
      // If there's a message, start a timer to clear it after 2 seconds
      console.log("Ran useEffect:......");

      if (message) {
        const timer = setTimeout(() => {
          dispatch(resetMessage());  // Reset the message after the timeout
        }, 2000);
        console.log("Timer id in useEffect:......", timer);
        // Clear the previous timeout when the message changes or the component unmounts
        return () => clearTimeout(timer);
      }
    }, [message]);  // Depend on message and dispatch to reset the timeout

    // Render the alert only if there's a message
    return message ? <div className="alert" id={id}>{message}</div> : null;
  };
  return (
    <div className="page">
      <Alert />
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};


// export const Timer = () => {
//   const dispatch = useDispatch();
//   const { message } = useSelector(alertSelector);

//   useEffect(() => {
//     if (message) {
//       setTimeout(() => {
//         dispatch(resetMessage());
//       }, 2000);
//     }
//   }, [message]);

//   return (
//     <div className="page">
//       {message && <div className="alert">{message}</div>}
//       <h1>Simple Timer</h1>
//       <Time />
//       <TimerActions />
//     </div>
//   );
// };