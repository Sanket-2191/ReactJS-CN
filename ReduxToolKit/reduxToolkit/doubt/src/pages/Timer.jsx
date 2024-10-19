import { useDispatch, useSelector } from "react-redux";

import { TimerActions } from "../components/TimerActions.jsx";
import { Time } from "../components/Time.jsx";
import { alertSelector, resetMessage } from "../redux/reducers/alertReducer.js";
import { useEffect, useId } from "react";
// import { Alert } from "../components/Alert.jsx";



export const Timer = () => {

  const { message } = useSelector(alertSelector);
  const dispatch = useDispatch();

  const Alert = () => {

    console.log("Rerendered Alert");

    const id = useId()
    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          dispatch(resetMessage());

          // console.log("message reset done ");
        }, 2000);

        return () => {
          clearTimeout(timer);
          // console.log("timer & message: ", { message });
        } // Clean up the timeout on component unmount
      }
    }, [message]); // Properly depend on 'message'

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