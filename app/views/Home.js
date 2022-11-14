import React from 'react';
import Jumbotron from '../components/layouts/Jumbotron';
import Carousel from '../components/containers/Carousel';
import AboutMe from '../components/layouts/AboutMe';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <section>
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">
            Proyectos
          </h2>
        </div>
        <Carousel />
      </section>
      <section>
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">
            Acerca de mí
          </h2>
        </div>
        <AboutMe />
      </section>
    </div>
  );
}
