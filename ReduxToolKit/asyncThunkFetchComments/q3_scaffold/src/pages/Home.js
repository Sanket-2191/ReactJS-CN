import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
import { fetchComments } from "../redux/reducers/commentsReducer"; // Import async thunk action here

export const Home = () => {
  const dispatch = useDispatch(); // Corrected the spelling

  useEffect(() => {
    // Directly dispatch the async thunk action
    dispatch(fetchComments());
  }, [dispatch]); // Added dispatch to the dependency array

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
