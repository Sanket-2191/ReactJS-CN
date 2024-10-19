
import { useDispatch, useSelector } from "react-redux";

import { TimerActions } from "../components/TimerActions.js";
import { Time } from "../components/Time.js";
import { alertSelector, resetMessage } from "../redux/reducers/alertReducer.js";
import { useEffect } from "react";

export const Timer = () => {
  // get alert message here
  const { message } = useSelector(alertSelector);
  const dispatch = useDispatch()
  // create effect to reset alert message here
  const Alert = () => {
    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          dispatch(resetMessage());
        }, 2000);

        return () => clearTimeout(timer); // Clean up the timeout on component unmount
      }
    }, [message, dispatch]);

    return <div className="alert">{message}</div>
  }



  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <Alert />}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
