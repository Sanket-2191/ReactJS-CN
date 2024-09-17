import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const [data, error, loading, getJoke] = useFetch(url);

  // Display loading text when the request is being processed
  if (loading) return <h2>Loading...</h2>;

  // Display an error message if something went wrong
  if (error) return <h2>Something went wrong: {error.message}</h2>;

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
