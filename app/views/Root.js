import React from 'react';
import { Outlet } from 'react-router';
import BackgroundPage from '../components/layouts/BackgroundPage';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

export default function Root() {
  return (
    <div>
      <BackgroundPage />
      <Navbar />
      <div
        style={{
          minHeight: '80vh',
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
