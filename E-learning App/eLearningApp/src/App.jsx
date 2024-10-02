import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Page404 from './pages/misc/Page404/Page404';
import Details from './pages/app/details/Details';
import Learn from './pages/app/learn/Learn';
import Chapter from './pages/app/chapter/Chapter';
import { ThemeProvider } from './context/Theme.context';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <ThemeProvider> <Nav /> </ThemeProvider>,
      errorElement: < Page404 />,
      children: [
        {
          index: true,
          element: <Hero />
        },
        {
          path: '/courses',
          children: [
            {
              index: true,
              element: <Courses />
            },
            {
              path: ':id',
              children: [
                {
                  index: true,
                  element: <Details />
                },
                {
                  path: 'learn',
                  element: <Learn />,
                  children: [
                    { path: ':chapterId', element: <Chapter /> }

                  ]
                }
              ]
            },
          ]
        },
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
