import React from 'react';
import Navbar from './components/layouts/Navbar';
import Jumbotron from './components/layouts/Jumbotron';
import StripeContainer from './components/containers/StripeContainer';
import Carousel from './components/containers/Carousel';

/**
 * @returns {React.Component} Application Main Component
 */

export default function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <StripeContainer>
        <h2>Proyectos</h2>
      </StripeContainer>
      <Carousel />
      <StripeContainer>
        <h2>Sobre Mí</h2>
      </StripeContainer>
    </div>
  );
}
