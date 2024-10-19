import "./styles.css";
import { Actions } from "./components/Actions";
import { Timer } from "./components/Timer";
import { store } from "./store";
import { Provider } from "react-redux"
//  add redux imports here


export default function App() {
  return (
    // Provide the provider here for Timer and actions
    <div className="App">
      <h1>Simple Timer</h1>
      <Provider store={store}>
        <Timer />
        <Actions />
      </Provider>
    </div>
  );
}
// App;