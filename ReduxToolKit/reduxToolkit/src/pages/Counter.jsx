import { Count } from "../components/Count.jsx";
import { CounterActions } from "../components/CounterActions.jsx";

export const Counter = () => {
  return (
    <div className="page">
      <h1>Simple Counter</h1>
      <Count />
      <CounterActions />
    </div>
  );
};
