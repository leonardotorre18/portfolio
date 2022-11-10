import React from 'react';
import Jumbotron from '../components/layouts/Jumbotron';
import Carousel from '../components/containers/Carousel';

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
      <section className="h-96">
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">
            Acerca de mí
          </h2>
        </div>
      </section>
    </div>
  );
}
