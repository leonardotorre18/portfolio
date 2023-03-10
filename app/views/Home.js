import React from 'react';
import { motion } from 'framer-motion';
import Jumbotron from '../components/layouts/Jumbotron';
import Carousel from '../components/containers/Carousel';
import AboutMe from '../components/layouts/AboutMe';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: 1000 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 0, x: -1000 }}
    >
      <Jumbotron />
      <section>
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">
            Plantillas
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
    </motion.div>
  );
}
