import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Root from '../views/Root';

export default createBrowserRouter([
  {
    path: '/',
    element: (<Root />),
    children: [
      {
        // path: '',
        index: true,
        element: (<Home />),
      },
      {
        path: 'projects',
        element: (<div>Ruta Hacerca de...</div>),
      },
    ],
  },
]);
