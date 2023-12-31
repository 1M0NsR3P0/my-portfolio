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
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Services from './Components/Pages/Home/Services';
import Error from './Components/Common/Error';
import { DarkModeProvider } from './Components/Utilities/DarkmodeContext';

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
            path: '/services',
            element: <Services/>
          },
          {
            path: '/projects',
            element: <Projects/>
          },
          {
            path: '/contact',
            element: <Contact/>
          },
        ]
      },

    ]
  },
  {
    path:'/*',
    element:<Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
