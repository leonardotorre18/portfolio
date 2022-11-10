import React from 'react';
import { RouterProvider } from 'react-router';
import Routes from './routes/Routes';

export default function App() {
  return (
    <RouterProvider router={Routes} />
  );
}
