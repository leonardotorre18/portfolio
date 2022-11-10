import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Error from '../views/Error';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Contact from '../views/Contact';
import Root from '../views/Root';

export default createBrowserRouter([
  {
    path: '/',
    element: (<Root />),
    errorElement: (<Error />),
    children: [
      {
        index: true,
        element: (<Home />),
      },
      {
        path: 'projects',
        element: (<Projects />),
      },
      {
        path: 'contact',
        element: (<Contact />),
      },
    ],
  },
]);
