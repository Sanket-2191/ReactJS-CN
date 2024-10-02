import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { ItemDetails } from "./pages/ItemDetails";

export default function App() {
  // refactor the code below
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/list",
          children: [
            { index: true, element: <List /> },
            { path: ":itemId", element: <ItemDetails /> }
          ]

        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}