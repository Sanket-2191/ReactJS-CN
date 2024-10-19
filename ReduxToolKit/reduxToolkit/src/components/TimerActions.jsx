import { useDispatch, useSelector } from "react-redux";
import {
  pauseTimer,
  resetTimer,
  startTimer,
  timerSelector
} from "../redux/reducers/timerReducer.js";
import { resetMessage } from "../redux/reducers/alertReducer.js";

export const TimerActions = () => {
  const dispatch = useDispatch();
  const { isRunning } = useSelector(timerSelector);

  return (
    <div className="actions">
      <button disabled={isRunning} onClick={() => {
        dispatch(resetMessage())
        dispatch(startTimer())
      }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => {
        dispatch(resetMessage())
        dispatch(pauseTimer())
      }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => {
        dispatch(resetMessage())
        dispatch(resetTimer())
      }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
