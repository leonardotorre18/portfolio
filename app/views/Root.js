import React from 'react';
import { Outlet } from 'react-router';
import BackgroundPage from '../components/layouts/BackgroundPage';
import Navbar from '../components/layouts/Navbar';

export default function Root() {
  return (
    <div>
      <BackgroundPage />
      <Navbar />
      <Outlet />
    </div>
  );
}
