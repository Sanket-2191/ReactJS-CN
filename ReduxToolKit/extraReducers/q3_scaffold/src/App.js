import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components imports
import { Navbar } from "./components/Navbar.js";

// pages imports
import { Home } from "./pages/Home.js";
import { Timer } from "./pages/Timer.js";
import { Counter } from "./pages/Counter.js";


import { store } from "./store.js";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/timer", element: <Timer /> },
        { path: "/counter", element: <Counter /> }
      ]
    }
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
