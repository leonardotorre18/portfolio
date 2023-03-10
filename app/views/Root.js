import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundPage from '../components/layouts/BackgroundPage';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Routes from '../routes/Routes';

export default function Root() {
  return (
    <div>
      <Router>
        <BackgroundPage />
        <Navbar />
        <div
          style={{
            minHeight: '80vh',
          }}
        >
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
