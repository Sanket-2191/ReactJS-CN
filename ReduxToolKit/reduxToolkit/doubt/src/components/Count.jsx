import { useSelector } from "react-redux";
import { counterSelector } from "../redux/reducers/counterReducer.js";

export const Count = () => {
  const { count } = useSelector(counterSelector);

  return <b>{count}</b>;
};
