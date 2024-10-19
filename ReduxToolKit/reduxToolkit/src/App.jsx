import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components imports
import { Navbar } from "./components/Navbar.jsx";

// pages imports
import { Home } from "./pages/Home.jsx";
import { Timer } from "./pages/Timer.jsx";
import { Counter } from "./pages/Counter.jsx";


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
