import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { incrementTimer, pauseTimer, resetTimer, startTimer } from "./src/redux/actions/timerActions";

export default function App() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.isRunning);
  const elapsedTime = useSelector((state) => state.elapsedTime);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return (
    <div className="App">
      <h1>Simple Timer</h1>
      <b>{elapsedTime}</b>
      <div className="actions">
        <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
            alt="start"
          />
        </button>
        <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
            alt="pause"
          />
        </button>
        <button onClick={() => dispatch(resetTimer())}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
            alt="reset"
          />
        </button>
      </div>
    </div>
  );
}
