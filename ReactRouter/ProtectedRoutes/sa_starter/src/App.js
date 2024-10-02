import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  NavLink,
  RouterProvider
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // create high-level protected route below
  const ProtectedRoutes = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/" replace />
    } else return children;
  }

  // protect the routes for the contact, list and item details pages
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar loggedIn={isLoggedIn} />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
        },
        {
          path: "/contact",
          element: <ProtectedRoutes> <Contact /> </ProtectedRoutes>
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: <ProtectedRoutes> <List /> </ProtectedRoutes>
            },
            {
              path: ":itemId",
              element: <ProtectedRoutes> <ItemDetails /> </ProtectedRoutes>
            }
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
