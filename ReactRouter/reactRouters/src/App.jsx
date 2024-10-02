// // import "./styles.css";
// import "./styles.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home } from "./pages/Home";
// import { List } from "./pages/List";
// import { Contact } from "./pages/Contact";

// export default function App() {
//   const router = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "/list", element: <List /> },
//     { path: "/contact", element: <Contact /> }
//   ]);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }
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



// Approach 2 **************************************************************************************
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import "./styles.css";
// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { List } from "./pages/List";
// import { Contact } from "./pages/Contact";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/list" element={<List />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }


// Approach 3 ****************************************************************************************************
// import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Home } from './pages/Home';
// import { List } from './pages/List';
// import { Contact } from './pages/Contact';

// // Layout component that includes the Navbar
// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       {/* Outlet is where the routed components (Home, List, Contact) will be rendered */}
//       <Outlet />
//     </div>
//   );
// };

// export default function App() {
//   // Define the routes using the Layout component
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />, // Wrap all routes with the Layout
//       children: [
//         { path: '/', element: <Home /> },
//         { path: '/list', element: <List /> },
//         { path: '/contact', element: <Contact /> }
//       ]
//     }
//   ]);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }
