import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, incrementCounter, resetCounter } from "../redux/actions/counterActions";

export const CounterActions = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="actions">
      {/* dispatch action to decrease count */}
      <button disabled={count <= 0} onClick={() => dispatch(decreaseCounter())} aria-label="Decrease counter">
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>

      {/* dispatch action to increase count */}
      <button disabled={count >= 10} onClick={() => dispatch(incrementCounter())} aria-label="Increase counter">
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>

      {/* dispatch action to reset count */}
      <button onClick={() => dispatch(resetCounter())} aria-label="Reset counter">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
