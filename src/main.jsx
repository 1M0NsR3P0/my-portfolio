import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Components/Common/Main';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Header from './Components/Pages/Home/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Header/>
          },
          {
            path: '/about',
            element: <About/>
          },
          {
            path: '/skills',
            element: <Blog/>
          },
          {
            path: '/projects',
            element: <Blog/>
          },
          {
            path: '/contact',
            element: <Contact/>
          },
        ]
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
