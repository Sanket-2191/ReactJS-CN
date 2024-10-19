import { Count } from "../components/Count.js";
import { CounterActions } from "../components/CounterActions.js";

export const Counter = () => {
  return (
    <div className="page">
      <h1>Simple Counter</h1>
      <Count />
      <CounterActions />
    </div>
  );
};
