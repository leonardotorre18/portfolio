import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layouts/Navbar';

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
